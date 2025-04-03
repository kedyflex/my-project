function go(){
    let a = document.getElementById("a");
    let pos = 0;
    let lastPos = 300;
    let speed = 2;
    function animate(){
        if(pos <= lastPos){
            pos += speed;
            a.style.left = pos + "px";
            
        }
        else{
            pos = -a.offsetWidth;
        }
        requestAnimationFrame(animate);
    }
    animate();
}
go();