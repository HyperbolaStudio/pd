// JavaScript Document
//南无阿弥陀佛 佛祖保佑无bug
$(document).ready(function(){
	$("#mask").hide();
	$("#drawer").hide(500);
	$("#mask").click(function(){
		$("#mask").hide();
		$("#drawer").hide(500);
	});
	$("#dwclick").click(function(){
		$("#mask").show();
		$("#drawer").show(500);
	});
});