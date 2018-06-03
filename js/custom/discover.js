$(function(){
	$.ajax({
		type:"get",
		url:"data/discover.json",
		async:true,
		success:function(data){
			for (var i = 0;i < data.length;i++) {
				$(".storyList").append('<li><article></article><div class="storySummary"><div class="summaryLeft"><h1>'+data[i].noteTitle+'</h1><h2>'+data[i].noteSummary+'</h2></div><span class="publicationTime" >'+data[i].noteTime+'</span></div></li>')
			}
			
			/* 点击效果 */
			$(".storySummary").on("click",function(){
				$(this).css("background","#eee");
				window.location.href = "html/noteContent.html"
			})
			$(".storySummary").on("touchend",function(){
				$(this).css("background","#fff");
			})
		},
		error:function(){
			alert("网络访问错误");
		}
	});
})
