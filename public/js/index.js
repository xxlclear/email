let email// 邮件
let verify// 文本框验证码
let newNum// 验证码
$('.btn').on('click', function () {
   email = $('.email').val()
   if (email.length != 0) {
      let numArr = []
      for (let i = 0; i < 6; i++) {
         let num = Math.floor(Math.random() * 10)
         numArr.push(num)
      }
      newNum = numArr.join('')
      console.log(newNum);
      $.ajax({
         type: 'POST',
         url: 'https://luckycola.com.cn/tools/customMail',
         data: {
            ColaKey: `UsXtpKkYbcl25D17035176292004PAFOOmtVX`,
            tomail: email,// 目标邮箱
            fromTitle: `Clear`,// 邮箱标题
            subject: `verify`,// 邮箱主题
            content: `<h1 style="color: orange; text-align: center;margin: 10px auto;font-weight: 700;font-size:30px">${newNum}</h1>`

            ,// 可以是html内容 可以是普通文本
            smtpCodeType: `163`,
            smtpCode: `JGZTKIAXUULUCZVY`,
            smtpEmail: `xxlclear@163.com`,
         },
         success: function (res) {
            console.log(res);
         }

      })
   } else {
      alert("请输入邮件\n")
   }

})

$('.login').on('click', function () {
   verify = $('.verify').val()
   console.log(verify, newNum)
   if (verify == newNum) {
      loginDocument()
   } else {
      alert("验证码不正确\n")
   }
})
function loginDocument () {
   window.location.href = "login.html"
}