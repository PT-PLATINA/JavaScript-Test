window.onload=function()
{
    function toDou(n)
    {
        if(n<10)
        {
            return '0'+n;
        }
        else
        {
            return ''+n;
        }
    }
    var oBtn1=document.getElementById('btn1');
    var oBtn2=document.getElementById('btn2');
    var timer=null;
    var aImg=document.getElementsByTagName('img');
    //定时器
    function tick(){
        var oDate=new Date();
        var str=toDou(oDate.getHours())+toDou(oDate.getMinutes())+toDou(oDate.getSeconds());
    
        for(var i=0;i<aImg.length;i++)
        {
            aImg[i].src='img/'+str.charAt(i)+'.png';
        }
    }
    
    timer=setInterval(tick,1000);
    
   
    oBtn1.onclick=function()
    {
        setInterval(tick,1000);        
    }
    oBtn2.onclick=function()
    {
        clearInterval(timer); 
    }
    tick();
}

