var fudian = {
	tips:function(tipString){
		$(".tipsMasking").css("display","block");
		$(".tips").text(tipString);
		var timeId = null;
		clearTimeout(timeId);
		timeId = setTimeout(function(){
			$(".tipsMasking").css("display","none");
			$(".tips").text('');
		},3000)
	}
}