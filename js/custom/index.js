var mySwiper = new Swiper('.swiper-container', {
	autoplay: true,//可选选项，自动滑动
	loop : true,
	pagination: {
    	el: '.swiper-pagination',
  	},
})
$("#openBagsListBtn").on("touchstart",function(){
	$(this).css("background","#d65e0e");
});
$("#openBagsListBtn").on("touchend",function(){
	$(this).css("background","#FF6600");
})
/* 跳转到商品列表页 */
$("#openBagsListBtn").on("touchstart",function(){
	window.location.href = "html/shoppingList.html";
});
