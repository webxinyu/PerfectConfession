/* 判断是否登录 */
if (localStorage.fdUserInformation) {
	//显示登录状态
	fdUserInformationJson = JSON.parse(localStorage.fdUserInformation);
	var fdUserName = fdUserInformationJson.fdUserName;		//用户名称
	$(".isLogin").show();
	$(".noLogin").hide();
	$("#userNick").text(fdUserName);
	$("#userPhone").text("132xxxxxxxx");
}
$(".informationManagement li").on("touchstart",function(){
	$(this).css("background","#eee");
});
$(".informationManagement li").on("touchend",function(){
	$(this).css("background","#fff");
});
$("#toLoginAndRegister").on('click', function() {
  window.location.href='html/loginAndRegister.html';
});
/* 退出登录 */
$(".logOff").on("click",function(){
	localStorage.fdUserInformation = "";
	mui.toast("您已安全退出");
	setTimeout(function(){
		location.reload();
	},2000);
})