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
	})
})
