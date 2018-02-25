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
	$("#langbutton").click(function(){
		if($("#langselect").css("display")=="none"){
			$("#langselect").show(500);
		}else{
			$("#langselect").hide(500);
		};			  
	});
	$("#langOK").click(function(){
		var language=$("#lang").val()
		switch(language){
			case "en_US":
				window.location.href="../en_US/index.html";
				break;
			case "zh_CN":
				window.location.href="../zh_CN/index.html";
				break;
		}
	})
});