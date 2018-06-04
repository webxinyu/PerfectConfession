$.ajax({
	type:"get",
	url:"data/discover.json",
	async:true,
	success:function(data){
		for (var i = 0;i < data.length;i++) {
			$(".storyList").append('<li><input type="hidden" value="'+data[i].noteId+'" /><article></article><div class="storySummary"><div class="summaryLeft"><h1>'+data[i].noteTitle+'</h1><h2>'+data[i].noteSummary+'</h2></div><span class="publicationTime" >'+data[i].noteTime+'</span></div></li>')				
		}
		$(".storySummary").on("click",function(){
			console.log($(this).parent().find("input").val());
			var noteId = $(this).parent().find("input").val();
			window.location.href = "html/noteContent.html?noteId=" + noteId;
		})
		/* 点击效果 */
		$(".storySummary").on("touchstart",function(){
			$(this).css("background","#eee");
		})
		$(".storySummary").on("touchend",function(){
			$(this).css("background","#fff");
		})
	},
	error:function(){
		alert("网络访问错误");
	}
});

	
	
	
