<template lang="pug">
  #album
    h1.text-center 我的相簿
    hr
    h2 檔案上傳
    br
    b-form(@submit="submit")
      b-form-file(
        v-model="file"
        :state="state"
        placeholder="選擇檔案或拖曳至此"
        drop-placeholder="將檔案拖曳至此"
        required
        browse-text="瀏覽"
        accept="image/*"
        @input="validateFile"
      )
      p.text-danger 僅支援 1MB 以下的圖片
      b-form-textarea(
        v-model="description"
        placeholder="相片說明"
        rows="3" max-rows="6"
        maxlength="200"
        @input="validateText"
        :state="textstate"
      )
      br
      b-button(type="submit" variant="primary") 上傳
    hr
    Photoswipe
      b-row
          b-col(cols="12" md="6" lg="3" v-for="(image, idx) in images" :key="idx")
            b-card
              b-card-img(:src="image.src" v-pswp="image")
              b-card-body
                b-btn(v-if="image.edit" variant="danger" @click="cancel(image)") 取消
                b-btn(v-else variant="success" @click="edit(image)") 編輯
                b-btn(v-if="image.edit" variant="success" @click="update(image)") 更新
                b-btn(v-else variant="danger" @click="del(image,idx)") 刪除
                hr
                pre(v-if="!image.edit") {{ image.title }}
                b-form-textarea(v-else v-model="image.model")
</template>

<script>
export default {
  name: 'album',
  data () {
    return {
      file: null,
      description: '',
      state: null,
      textstate: null,
      images: []
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  methods: {
    validateFile () {
      if (this.file != null) {
        if (this.file.size >= 1024 * 1024 || !this.file.type.includes('image')) {
          this.state = false
          this.file = null
        } else {
          this.state = true
        }
      }
    },
    validateText () {
      if (this.description.length > 200) {
        this.textstate = false
      } else {
        this.textstate = true
      }
      // this.textstate = (!this.description.length > 200)
    },
    submit (event) {
      event.preventDefault()
      if (this.file === null || this.file.size >= 1024 * 1024 || !this.file.type.includes('image')) {
        alert('檔案格式不符')
      } else {
        // FormData 可以同時傳送檔案和表單資料
        const fd = new FormData()
        fd.append('image', this.file)
        fd.append('description', this.description)

        this.axios.post(process.env.VUE_APP_APIURL + '/file', fd, {
          // 因為 axios 預設是送 json，所以要自己設定成 formdata
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(response => {
          this.images.push(
            {
              title: this.description,
              src: process.env.VUE_APP_APIURL + '/file/' + response.data.name,
              _id: response.data._id,
              edit: false,
              model: response.data.name
            }
          )
          this.file = null
          this.description = ''
        }).catch(error => {
          alert(error.response.data.message)
        })
      }
    },
    edit (image) {
      image.edit = true
      image.model = image.title
    },
    update (image) {
      this.axios.patch(process.env.VUE_APP_APIURL + '/file/' + image._id, { description: image.model })
        .then(response => {
          image.edit = false
          image.title = image.model
        })
        .catch(() => {
          alert('發生錯誤132')
        })
    },
    cancel (image) {
      image.edit = false
      image.model = image.title
    },
    del (image, idx) {
      this.axios.delete(process.env.VUE_APP_APIURL + '/file/' + image._id)
        .then(response => {
          this.images.splice(idx, 1)
        })
        .catch(() => {
          alert('發生錯誤')
        })
    }
  },
  mounted () {
    this.axios.get(process.env.VUE_APP_APIURL + '/album/' + this.user)
      .then(response => {
        this.images = response.data.result.map(d => {
          return {
            title: d.description,
            src: process.env.VUE_APP_APIURL + '/file/' + d.name,
            _id: d._id,
            edit: false,
            model: d.name
          }
        })
      })
      .catch(() => {
        alert('發生錯誤')
      })
  }
}
</script>
