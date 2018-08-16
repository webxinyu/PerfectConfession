var mySwiper = new Swiper('.swiper-container', {
	autoplay: true,//可选选项，自动滑动
	loop : true,
	pagination: {
    	el: '.swiper-pagination',
  	},
})
$(function(){
	$(".sureBtn").on("touchstart",function(){
		$(this).css("background","#d65e0e");
	})
	$(".sureBtn").on("touchend",function(){
		$(this).css("background","#FF6600");
	})
	/* 立即预约按钮 */
	$("#toOrder").on("click",function(){
		window.location.href = 'html/orderPage.html';
	});
	$(".wasteClassification").on("click","li",function(){
		console.log($(this).find("h2").text());
		if ($(this).find("h2").text() == "废纸") {
			window.location.href = 'html/subpage/reclamationDetails.html?classify=1';
		}
		if ($(this).find("h2").text() == "饮料瓶") {
			window.location.href = 'html/subpage/reclamationDetails.html?classify=2';
		}
		if ($(this).find("h2").text() == "金属") {
			window.location.href = 'html/subpage/reclamationDetails.html?classify=3';
		}
		if ($(this).find("h2").text() == "塑料") {
			window.location.href = 'html/subpage/reclamationDetails.html?classify=4';
		}
		if ($(this).find("h2").text() == "纺织物") {
			window.location.href = 'html/subpage/reclamationDetails.html?classify=5';
		}
		if ($(this).find("h2").text() == "玻璃") {
			window.location.href = 'html/subpage/reclamationDetails.html?classify=6';
		}
		
	})
})
