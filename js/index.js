$(function(){
	$(".nav").on("click","li",function(){
		$(this).siblings().removeClass("active");
		var hasChild = !!$(this).find(".subnav").size();
		if(hasChild){
			$(this).toggleClass("hasChild");
		}
		$(this).addClass("active");
	});
	
	
	
	
	$(".nav>li").css({"borderColor":"#dbe9f1"});
	$(".nav>.active").prev().css({"borderColor":"#7ac47f"});
	$(".nav").on("click","li",function(e){
		var aurl = $(this).find("a").attr("date-src");
		$("#iframe").attr("src",aurl);
		$(".nav>li").css({"borderColor":"#dbe9f1"});
		$(".nav>.active").prev().css({"borderColor":"#7ac47f"});
		reinitIframe();
		return false;
	});
	


	
})
