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
/* 点击添加按钮 */
$(".addShoppingCart").on("click",function(){
	var imgSrc = $(this).parent().parent().find(".shopImg").find("img")[0].src;		//当前添加商品的图片路径
	$(".footerPopUp").css("display","block");
	$("#shoppingImg")[0].src = imgSrc;
	
});
/* 关闭添加购物车弹窗 */
$(".closeShopInf").on("click",function(){
	$(".footerPopUp").css("display","none");
})
/* 购买数量增加 */
var startNum = 0;
$("#shopJia").on("click",function(){
	startNum = parseInt($(this).parent().find(".shopSum").text())+1;
	if (startNum >= parseInt($("#surplusNum").text())) {
		startNum = parseInt($("#surplusNum").text());
		$(this).parent().find(".shopSum").text(startNum);
		buttonColorNot("shopJia");
	} else{
		buttonColorCan("shopJia");
		buttonColorCan("shopJian");
		$(this).parent().find(".shopSum").text(startNum);
	}
	
})
$("#shopJian").on("click",function(){
	startNum = parseInt($(this).parent().find(".shopSum").text())-1;
	if (startNum <= 1) {
		startNum = 1;
		$(this).parent().find(".shopSum").text(startNum);
		buttonColorNot("shopJian");
	} else{
		buttonColorCan("shopJian");
		buttonColorCan("shopJia");
		$(this).parent().find(".shopSum").text(startNum);
	}
	
})
function buttonColorNot(btnDom){		//按钮颜色变灰
	$("#"+btnDom).css("borderColor","#ccc");
	$("#"+btnDom).find(".iconfont").css("color","#ccc");
}
function buttonColorCan(btnDom){		//按钮颜色变量
	$("#"+btnDom).css("border","1px #999 solid");
	$("#"+btnDom).find(".iconfont").css("color","#999");
}
$(".FineLeft").on("click",function(){
	window.location.href = 'html/commodityDetails.html';
});
$(".shopList").on("click","li",function(){
	window.location.href = 'html/commodityDetails.html';
})

/* 打开四大分类的详情页面 */
$("#openStorePage").on("click",function(){		//商家信息
	window.location.href = 'html/storePage.html';
});
$("#openEcologicalAgriculturePage").on("click",function(){		//生态农业
	window.location.href = 'html/ecologicalAgriculturePage.html';
});
$("#openFreeDeliveryArea").on("click",function(){		//免费送货区
	window.location.href = 'html/freeDeliveryArea.html';
});
$("#openIntegralPurchase").on("click",function(){		//积分购
	window.location.href = 'html/integralPurchase.html';
});
