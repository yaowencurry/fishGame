//1:创建海葵构造函数 aneObj
var aneObj=function(){
    this.x=[];//所有海葵的位置
    this.len=[];//所有海葵的高度
}
//1.1:在海葵函数的原型对象中添加属性num表示海葵的数量
aneObj.prototype.num=50
//2:为构造函数添加初始化方法 init
aneObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.len[i]=200+Math.random()*50;
        this.x[i]=i*16+Math.random()*20;
    }
}
//3:为构造函数添加绘制海葵方法  draw
aneObj.prototype.draw=function(){
    ctx2.save();
    for(var i=0;i<this.num;i++){
        ctx2.beginPath();
        ctx2.moveTo(this.x[i],canHeight);
        ctx2.lineTo(this.x[i],canHeight-this.len[i]);
        ctx2.stroke();
    }
    ctx2.restore();
}
//4:将ane.js添加index.html
//5:在main.js创建海葵对象并且调用相应方法