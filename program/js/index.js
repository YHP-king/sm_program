	var block=document.getElementById('p_block');
	var tdBlock=block.getElementsByTagName('td');
// 点击开始游戏按钮
function start_play(obj){
	// 隐藏开始游戏按钮
	obj.style.display="none";
	// 设置颜色样式处于数组
	var arr=["#000000;","#ffffff;"];
	// 通过函数获取随机数
	var num=parseInt(Math.random()*2);
	// console.log(num);
	console.log(tdBlock);
	tdBlock[0].setAttribute("bgcolor",arr[num]);
}