// JavaScript Document
//南无阿弥陀佛 佛祖保佑无bug
$(document).ready(function(){
	$("#mask").hide();
	$("#drawer").hide();
	$("#mask").click(function(){
		$("#mask").hide();
		$("#drawer").hide(500);
	});
	$(".drawer-title").click(function(){
		$("#mask").hide();
		$("#drawer").hide(500);
	});
	$(".drawer-item").click(function(){
		$("#mask").hide();
		$("#drawer").hide(500);
	});
	$("#dwclick").click(function(){
		$("#mask").show();
		$("#drawer").show(500);
	});
});