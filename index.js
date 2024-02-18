for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var sound1=this.innerHTML;
        makesound(sound1);
        makeAnimation(sound1);

    })
}
document.addEventListener("keypress",function(event){
        makesound(event.key);
        makeAnimation(event.key);
})
function makesound(sound1)
{
    var audio=new Audio("sounds/"+sound1+".mp3");
        audio.play();
}
makeAnimation(evnt)
{  var activebtn= document.querySelector("."+ evnt);
    activebtn.classList.add("pressed");
    setTimeout(function(){
       activebtn.classList.remove("pressed");
    },100);
}