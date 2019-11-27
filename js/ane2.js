//ane2.js 海葵的第二个版本
//起点坐标  控制点坐标   终点坐标
//摆动幅度
//1:创建构造函数aneobj
var aneObj=function(){
    this.rootx=[];  //起点坐标
    this.headx=[];  //终点坐标x
    this.heady=[];  //终点坐标y
    this.apm=[];    //摆动幅度   20 25 50
    this.alpha=0;   //正弦函数返回-1 .... 1    
}
//2:为构造函数添加数据num=50
aneObj.prototype.num=50;
//3:为构造函数添加函数init
aneObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.rootx[i]=i*16+Math.random()*20;
        this.headx[i]=this.rootx[i];
        this.heady[i]=canHeight-250+Math.random()*20;
        this.apm[i]=20+Math.random()*20; 
    }
}
//4:为构造函数添加函数draw
aneObj.prototype.draw=function(){
    ctx2.save();
    ctx2.strokeStyle="#3b154e";
    ctx2.lineWidth=20;
    ctx2.lineCap="round";
    ctx2.globalAlpha=0.5;
    //创建数据-1 0 0.1 0.11  0.12  1
    this.alpha+=0.0008*36;
    var p=Math.sin(this.alpha); 
    //console.log(p);
    for(var i=0;i<this.num;i++){
        ctx2.beginPath();
        //重新计算终点坐标
        this.headx[i]=this.rootx[i]+this.apm[i]*p;
        ctx2.moveTo(this.rootx[i],canHeight);
        ctx2.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i],this.heady[i])
        ctx2.stroke();
    }
    ctx2.restore();
}
//5:在index.html注册一个ane.js 添加ane2.js