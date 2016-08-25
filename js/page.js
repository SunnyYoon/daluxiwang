//<![CDATA[ 
jQuery(function(){
	jQuery('.wenxin').mouseenter(function(){
		jQuery(this).children(".wxbox").stop().fadeIn();
	});
	jQuery('.wenxin').mouseleave(function(){
		jQuery(this).children(".wxbox").stop().fadeOut();
	});
	jQuery('.branchbox').mouseenter(function(){
		jQuery(this).children("#branch-ul").stop().fadeIn();
	});
	jQuery('.branchbox').mouseleave(function(){
		jQuery(this).children("#branch-ul").stop().fadeOut();
	});
	
	function submbody(){
		jQuery(".mc>li").each(function(){
		   if(jQuery(this).children('ul').length > 0){
				jQuery(this).addClass("parent");
			}
			if(jQuery(this).children('a').hasClass("act")){
				if(jQuery(this).children('ul').length > 0){
				    jQuery(this).children('a').next("ul").show();
				}
			}
		});	
	};
	submbody();
	jQuery(".mc li a").click(function(){
		if(jQuery(this).next("ul").length > 0){
			if(jQuery(this).hasClass("act")){
				jQuery(this).next("ul").hide();
				jQuery(".mc li a").attr("class","");
			}else{
				jQuery(".mc li a").attr("class","");
				jQuery(this).addClass("act");
				jQuery(".mc .submc").hide();
				jQuery(this).next("ul").show();
			}
		}else{
			return true;
		}
	});
	
	jQuery(".img a").hover(function(){
		jQuery(this).stop().children(".png").fadeIn(300);
		jQuery(this).stop().children(".png").children("span").animate({"margin-top":"-20px"},400);	
	},function(){
		jQuery(this).children(".png").fadeOut(100);
		jQuery(this).children(".png").children("span").animate({"margin-top":"-5px"},200);	
	})	

})
//]]>