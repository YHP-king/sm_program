// 获取标签对象
var btnObj=document.getElementById("start_p");
var tabObj=document.getElementById('p_block');
var trObj=tabObj.getElementsByTagName('tr');
// 设置颜色样式
var white_block="background-color: #fff";
var black_block="background-color: #000";

var timer1;
var timer2;
// 点击开始游戏按钮
function start_play(){
	// 隐藏开始游戏按钮
	btnObj.style.display="none";
	// 调用点击函数
	click_block();
	// 设置循环给生成黑块
	for(var i=0;i<trObj.length;i++){
		create_block(i);
	}
	// 设置定时器 1秒生成一次最上面一行的黑块
	timer1=setInterval("scroll_block()",1000);
	timer2=setInterval("create_block()",1000);
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
	for(var i=3;i>0;i--){
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
// 点击操作 点黑块颜色消失 点白块游戏结束
function click_block(){
	for(var j=0;j<trObj.length;j++){
		var tdObj=trObj[j].getElementsByTagName("td");
		var tdObjLength=tdObj.length;
		for(var i=0;i<tdObjLength;i++){
			tdObj[i].onclick=function(){
				var color_block=this.getAttribute("style");//获取点击块的颜色样式 用于下面判断
				if(color_block==black_block){
					this.setAttribute("style",white_block);
				}else{
					alert("游戏结束了！");
					clearInterval(timer1);
					clearInterval(timer2);
					// 显示开始游戏按钮
					btnObj.style.display="block";
				}
			}
		}
	}
}