console.log("app.js works");
function draw() {
  let text = "我的假髮會撕裂你";
  var canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    ctx.font = "24px AppleGothic";
    // ctx.fillText(text, 20, 40);
    // ctx.fillText("width:" + ctx.measureText(text).width, 10, 50);
    // ctx.fillText(text, 20, 40, 100);

    // 文字旋轉
    // ctx.rotate((20 * Math.PI) / 180);

    // ctx.fillText(fittingString(ctx, text, 100), 20, 40);
    ctx.globalCompositeOperation = "destination-over";
    // ctx.fillText(fittingString(ctx, text, 100), 20, 40);
    // ctx.globalCompositeOperation = "destination-over";
    // ctx.fillStyle = "red";
    // ctx.fillRect(20, 20, 100, 50);
    // ctx.fillStyle = "blue";
    // ctx.globalCompositeOperation = "source-over";
    // ctx.fillRect(50, 50, 75, 50);
    // ctx.fillStyle = "red";
    processText(ctx,20,20,50,100,text)

    // ctx.fillRect(150, 20, 75, 50);
    // ctx.fillStyle = "blue";
    // ctx.globalCompositeOperation = "destination-over";
    // ctx.fillRect(180, 50, 75, 50);
    // ctx.beginPath();
    //   ctx.arc(100,100,75,0,Math.PI*2,true); // Outer circle
    //   ctx.moveTo(110,75);
    //   ctx.arc(100,100,35,0,Math.PI,false);   // Mouth (clockwise)
    //   ctx.moveTo(65,65);
    //   ctx.arc(75,75,5,0,Math.PI*2,true);  // Left eye
    //   ctx.moveTo(95,65);
    //   ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
    //   ctx.stroke();
    // ctx.font = "24px AppleGothic";
    // ctx.fillText("我的假髮會撕裂你!", 10, 160);
    // ctx.rotate((20 * Math.PI) / 180);
    // ctx.fillStyle = "#0000ff";
    // ctx.fillRect(10, 10, 160, 90);
    // globalCompositeOperation = "destination-over";
    // ctx.arc(100, 100, 75, 0, Math.PI * 2, true); // Outer circle
  }
}
// var c=document.getElementById("myCanvas");
// var ctx=c.getContext("2d");
// ctx.fillStyle="red";
// ctx.fillRect(20,20,75,50);
// ctx.fillStyle="blue";
// ctx.globalCompositeOperation="source-over";
// ctx.fillRect(50,50,75,50);
// ctx.fillStyle="red";
// ctx.fillRect(150,20,75,50);
// ctx.fillStyle="blue";
// ctx.globalCompositeOperation="destination-over";
// ctx.fillRect(180,50,75,50);
function fittingString(canvas, str, maxWidth) {
  let minWidth=100
  let width = canvas.measureText(str).width;
  let ellipsis = "…";
  let ellipsisWidth = canvas.measureText(ellipsis).width;
//判斷圖形是直式還是橫式，目前想法是x-y，如過小於0就是直式，等於0就是正方形，大於0就是橫式
//橫式和正方形文字就照原本的方式顯示，如果是直式，文字就要以直式的方式顯示，但是目前要怎麼做還沒有想法
// 做法1:把每個文字都拆成一個fillText
// 做法二:看看可不可以設定寬度就可以overflow往下擠  
  
  if (width <= maxWidth || width <= ellipsisWidth) {
    return str;
  } else {
    let len = str.length;
    while (width >= maxWidth - ellipsisWidth && len-- > 0) {
      str = str.substring(0, len);
      width = canvas.measureText(str).width;
    }
    return str + ellipsis;
  }
}
function processText(ctx,x,y,w,h,txt){
    let isVertical
    if(w-h<0){
        // 直式
        console.log('直式')
        let splitedTexts=txt.split("")
        console.log(splitedTexts)
        // for(let txt in splitedTexts){
        //     console.log(splitedTexts[txt])
        // }
        splitedTexts.forEach(e => {
            ctx.fillText(e, x, y);
            ctx.fillStyle = "red";
            ctx.fillRect(x, y, w, h);
            ctx.globalCompositeOperation = "source-over";
            y=y+24
        });      

    }else{
        ctx.fillText(fittingString(ctx, txt, w), x, y+25);
    }
   
    // ctx.fillStyle = "red";
    // ctx.fillRect(x, y, w, h);
    // ctx.fillStyle = "blue";
    // ctx.globalCompositeOperation = "source-over";
    // ctx.fillRect(50, 50, 75, 50);
    // ctx.fillStyle = "red";
}