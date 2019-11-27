//声明一组全局变量
var can1;
var can2;
var ctx1;
var ctx2;
var canWidth;
var canHeight;
//1.1:创建全局变量保存背景图片
var bgPic;
//1.2:创建全局变量保存海葵对象
var ane;
//1.3:创建全局变量保存食物对象
var fruit;
//创建函数game      游戏第一个执行函数
function game(){
    init();
    gameloop();
}
//创建函数init    //游戏时初始全局变量
function init(){
    can1=document.getElementById("c1");
    can2=document.getElementById("c2");
    ctx1=can1.getContext("2d");
    ctx2=can2.getContext("2d");
    canWidth=can1.width;
    canHeight=can1.height;
    //console.log(canWidth,canHeight);
    //console.log(ctx1);
    //console.log(ctx2);
    bgPic=new Image();
    bgPic.src="src/background.jpg"
    //3.2:创建海葵对象并调用初始化方法
    ane=new aneObj();
    ane.init();
    //3.3:创建食物对象并调用初始化方法
    fruit=new fruitObj();
    fruit.init();
}
//创建函数gameloop  游戏创建定时器循环绘制所有元素
function gameloop(){
    //4.1创建职能定时器调用gameloop函数
    requestAnimationFrame(gameloop);
    //4.2:绘制前景图片
    drawBackground();
    //4.3:绘制海葵对象
    ane.draw();
    //4.4:绘制食物对象
    fruitMonitor();
    fruit.draw();
    //5:调用监听画布的对象
}
//当页面成功加载后，调用函数game
document.body.onload=game;