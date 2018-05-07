let vm = new Vue({
  el: '#app',
  data: {
    aliasExisted: false,
    formData: {
      alias: '',
      address: '',
      motto: ''
    }
  },
  computed: {
    showAddress () {
      return !!this.formData.alias.length
    }
  },
  method: {
    aliasExistedInfo() {
      this.$Notice.config({
        top: 50,
        duration: 3,
        title: '搜索成功，该别名已存在！',
        desc: '成功获取别名对应的Nas钱包地址！'
      });
    }
  },
  created() {
    console.log('aaa')
    this.hehe = 'fff'
  }
})
