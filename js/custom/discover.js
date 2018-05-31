$(function(){
	$(".storySummary").on("touchstart",function(){
		$(this).css("background","#eee");
	})
	$(".storySummary").on("touchend",function(){
		$(this).css("background","#fff");
	})
})
