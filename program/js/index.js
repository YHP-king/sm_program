// 获取标签对象
var btnObj=document.getElementById("start_p");
var h1Obj=document.getElementById("h1");
var tabObj=document.getElementById('p_block');
var trObj=tabObj.getElementsByTagName('tr');
// 设置颜色样式
var white_block="background-color: #fff";
var black_block="background-color: #000";

var timer1;
var timer2;
var timer3;
// 点击开始游戏按钮
function start_play(){
	// 隐藏开始游戏按钮
	btnObj.style.display="none";
	h1Obj.style.display="none";
	// 调用点击函数
	click_block();
	// 设置循环给生成黑块
	for(var i=0;i<trObj.length;i++){
		create_block(i);
	}
	// 设置定时器 滚动效果 1秒生成一次最上面一行的黑块 界限判定
	timer1=setInterval("scroll_block()",1000);
	timer2=setInterval("create_block()",1000);
	timer3=setInterval("noclick_block()",1000);
}
// 生成最上面一排黑块
function create_block(i=0){
	// 通过函数获取随机数
	var num=parseInt(Math.random()*4);
	var tdObj=trObj[i].getElementsByTagName('td');
	tdObj[num].setAttribute("style",black_block);
}
// 实现黑块滚动效果
function scroll_block(){
	for(var i=4;i>0;i--){
		var tdObj=trObj[i].getElementsByTagName('td');
		var tdObj2=trObj[i-1].getElementsByTagName('td');
		var tdObjLength=tdObj.length;
		for(var j=0;j<tdObjLength;j++){
			var oldtdObj=tdObj2[j].getAttribute("style");//获取上层颜色样式
			tdObj[j].setAttribute("style",oldtdObj);
			tdObj2[j].setAttribute("style",white_block);
		}
	}
}
// 点击操作 点黑块颜色消失并记录次数 点白块游戏结束
var sorce=0;
function click_block(){
	for(var j=0;j<trObj.length;j++){
		var tdObj=trObj[j].getElementsByTagName("td");
		var tdObjLength=tdObj.length;
		for(var i=0;i<tdObjLength;i++){
			tdObj[i].onclick=function(){
				var color_block=this.getAttribute("style");//获取点击块的颜色样式 用于下面判断
				if(color_block==black_block){
					this.setAttribute("style",white_block);
					sorce++;
				}else{
					// 调用游戏结束函数
					gramover(sorce);
					// 分数至零
					sorce=0;
				}
			}
		}
	}
}
// 黑块滚走之前未点击
function noclick_block(){
	var tdObj=trObj[4].getElementsByTagName("td");
	var tdObjLength=tdObj.length;
	var count=0;//用于计数
	for(var i=0;i<tdObjLength;i++){
		var color=tdObj[i].getAttribute("style");
		if(color==black_block){
			// 调用游戏结束函数
			gramover(sorce);
		}
	}
}
// 游戏结束
function gramover(sorce){
	// 清除自动生成黑块和滚动效果
	clearInterval(timer1);
	clearInterval(timer2);
	clearInterval(timer3);
	// 把所有块颜色变为白色
	for(var i=4;i>=0;i--){
		var tdObj=trObj[i].getElementsByTagName('td');
		var tdObjLength=tdObj.length;
		for(var j=0;j<tdObjLength;j++){
			tdObj[j].setAttribute("style",white_block);
		}
	}
	// 弹出分数
	alert("恭喜你共获得了"+sorce*10+"分");
	// 显示开始游戏按钮
	btnObj.style.display="block";
	h1Obj.style.display="block";
}