var NebPay = require("nebpay");
var nebPay = new NebPay();

if (typeof(webExtensionWallet) === "undefined") {
  alert('hehe')
}

let vm = new Vue({
  el: '#app',
  data: {
    dappAddress: 'n1eyHxVy1gskv8ByqQ4D3WKpsoxpZ5B31Ad',
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
  methods: {
    aliasExistedInfo() {
      this.$Notice.config({
        top: 50,
        duration: 3,
        title: '搜索成功，该别名已存在！',
        desc: '成功获取别名对应的Nas钱包地址！'
      });
    }
  },
  mounted() {
    if (typeof(webExtensionWallet) === "undefined") {
    alert('hehe')
  }
  }
})
