function render() {
    //while(px<width){
        py=0;
        while(py<height){
            let x=px*3.5/(width*zoom)-2.5+panx;
            let y=py*3/(height*zoom)-1.5+pany;
            let zx=x;
            let zy=y;
            let i=0;
            while(Math.pow(zx,pow)+Math.pow(zy,pow)<Math.pow(2,pow) && i<maxi){
                let xtemp=Math.pow(zx,pow)-Math.pow(zy,pow)+x;
                zy=-2*zx*zy+y;
                zx=xtemp;
                i=i+1;
            }
            if(i==maxi){
                w.fillStyle = 'rgb(0,0,0)';
            }
            else{
                w.fillStyle = 'rgb(255,255,255)';
            }
            w.fillRect(px,py,1,1);
            py=py+1;
        }
        w.stroke();
        px=px+1;
    //}
    if(px<width){
        window.requestAnimationFrame(render);
    }
}
var px=0;
var py=0;
var maxi=10000;
var w;
var width;
var height;
var pow=3;
var zoom=1;
var panx=0;
var pany=0;
//document.write('<canvas id="TestCanvas" width="600" height="600" style="border:1px solid #000000;"></canvas>');
function start(){
    var ccc = document.getElementById("TestCanvas");
    w = ccc.getContext("2d");
    width=ccc.width;
    height=ccc.height;
    pow=2;
    window.requestAnimationFrame(render);   
}
