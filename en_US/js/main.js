// JavaScript Document
//南无阿弥陀佛 佛祖保佑无bug
function closedrawer(){
	$("#mask").hide();
	$("#drawer").animate({left:"-300px"},500,$('#drawer').hide());
}
function opendrawer(){
	$("#mask").show();
		$("#drawer").animate({left:"-270px"},0);
		$("#drawer").show();
		$("#drawer").animate({left:"0px"},500);
}
$(document).ready(function(){
	$("#mask").click(function(){
		closedrawer();
	});
	$(".drawer-title").click(function(){
		closedrawer();
	});
	$(".drawer-item").click(function(){
		closedrawer();
	});
	$("#dwclick").click(function(){
		opendrawer()
	});
	$("#backclick").click(function(){
		history.back();
	});
});