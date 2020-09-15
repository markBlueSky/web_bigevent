$(function() {
    // 点击“去注册账号”的链接
    $('#link_reg').on('click', function() {
        console.log("去注册");
      $('.login-box').hide();
      $('.reg-box').show();
    })
  
    // 点击'去登录”的链接
    $('#link_login').on('click', function() {
        console.log("去登陆",e);
      $('.login-box').show();
      $('.reg-box').hide();
    })
  })