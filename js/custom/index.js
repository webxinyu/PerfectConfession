/* 页面进来创建购物车数组的本地存储 */
var storageShopCart = [];
localStorage.storageShopCart = JSON.stringify(storageShopCart);

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
$(".addShoppingCart").on("click",function(event){
	var imgSrc = $(this).parent().parent().find(".shopImg").find("img")[0].src;		//当前添加商品的图片路径
	$(".footerPopUp").css("display","block");
	$("#shoppingImg")[0].src = imgSrc;
	event.stopPropagation();	
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
/* 进入购物车 */
$(".lookShoppingCart").on("click",function(){
	window.location.href = 'html/subpage/shopCartList.html'
});
/* 加入购物车 */
$("#indexAddCart").on("click",function(){
	var flag = false;		//判断本地存储购物车是够有选中商品的判断的开关
	var thisSopIndex = 0;
	//获取存储在本地的购物车列表
	storageShopCart = JSON.parse(localStorage.storageShopCart);
	//获取商品id*** 注释：这里用图片id模仿 ***
	var shopId = getImgName();
	//获取商品的价格
	var shopPrice = $("#nowShopPrice").text();
	//获取商品的数量
	var shopSum = $(".shopSum").text();
	//当前商品信息
	var shopArr = {"shopId":shopId,"shopPrice":shopPrice,"shopSum":shopSum}
	//判断本地存储的购物车列表中是否有当前选择的商品
	for (var i = 0; i < storageShopCart.length; i++) {
		if (storageShopCart[i].shopId == shopId) {
			flag = true;
			thisSopIndex = i;
		} else{
			flag = false;
		}
	}
	if (flag) {		//有当前商品
		storageShopCart.splice(thisSopIndex,1,shopArr);
	} else{			//没有当前商品
		storageShopCart.push(shopArr);
	}
	localStorage.storageShopCart = JSON.stringify(storageShopCart);
})






/* 项目用到的所有的公共方法 */
function getImgName() {
	//先得到图片
	var img=document.getElementById("shoppingImg");
	//得到图片路径
	var path=img.src;
	//从路径中截取图片名[包括后缀名]
	var filename;
	if(path.indexOf("/")>0){		//如果包含有"/"号 从最后一个"/"号+1的位置开始截取字符串
	    filename=path.substring(path.lastIndexOf("/")+1,path.length);
	}
	else{
	    filename=path;		
	}
	return filename;	
}

