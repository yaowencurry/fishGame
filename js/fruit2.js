//1:创建食物构造函数
var fruitObj=function(){
    this.x=[];//食物的位置
    this.y=[];
    this.alive=[];//食物的状态
    this.fruitType=[];//食物的类型
    this.l=[];//食物的宽度
    this.spd=[];//食物的速度
    this.blue=new Image();
    this.orange=new Image();
    this.aneNo=[];
}
//2:为食物构造函数添加数量num=30；
fruitObj.prototype.num=30;
//3:为食物构造函数添加方法init
fruitObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.x[i]=0;
        this.y[i]=0;
        this.alive[i]=false;
        this.fruitType[i]="";
        this.l[i]=0;
        this.spd[i]=Math.random()*0.017+0.3;
    }
    this.blue.src="src/blue.png";
    this.orange.src="src/fruit.png";
}
//4:为食物构造函数添加方法draw
fruitObj.prototype.draw=function(){
    for(var i=0;i<this.num;i++){
        //1:判断当前食物状态
        if(this.alive[i]){
            //2:判断当前食物类型
            if(this.fruitType[i]=="blue"){
                var pic=this.blue;
            }else{
                var pic=this.orange;
            }
            if(this.l[i]<=14){
                this.l[i]+=this.spd[i];//3:由小变大
                //获取海葵的下标
                var no=this.aneNo[i];
                //获取当前海葵的终点坐标xy
                this.x[i]=ane.headx[no];
                this.y[i]=ane.heady[no];
            }else{
                this.y[i]-=this.spd[i]*3;//4:向上漂浮
            }
            //5:绘图
            ctx2.drawImage(pic,this.x[i],this.y[i],this.l[i],this.l[i])
            //6:如果漂浮出画布 将当前食物修改为不活动
            if(this.y[i]<10){
                this.alive[i]=false;
            }
        }
    }
}
//5:在index.html注释fruit.js文件，添加fruit2.js文件
//7:创建函数监听画布上活动食物数量
//如果不足15个，挑一个不活动的食物
function fruitMonitor(){
    var sum=0;
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]) sum++;
    }
    if(sum<15){
        sendFruit();
        return; 
    }
};
//8:从不活动的食物中挑一个
function sendFruit(){
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]==false){
            fruit.born(i);
            return;
        }
    }
}
//9:出生
fruitObj.prototype.born=function(i){
    //随机找到海葵的下标
    var idx=Math.floor(Math.random()*ane.num);
    this.aneNo[i]=idx;
    //设置宽度
    this.l[i]=0;
    //设置状态为true
    this.alive[i]=true;
    //随机指定类型字符串
    this.fruitType[i]=Math.random()<0.9 ? "blue" : "orange";
}
//10:在main.js中gameloop中调用监听画布的方法