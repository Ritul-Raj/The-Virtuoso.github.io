
var n=document.querySelectorAll(".drum1").length;

// for button press (button which we made in website)

for(var i=0;i<n;i++){

    document.querySelectorAll(".drum1")[i].addEventListener("click",function(){
  
  var ritul= this.innerHTML;

  musicalinstrument( ritul);
  animation (ritul);
  
    //   var audio=new Audio ("snare.mp3");
    //   audio.play();
    })

}

document.addEventListener("keypress",function (event){

    musicalinstrument( event.key);
    animation (event.key);

});


// for key press (means ydi koi keyboard ka key press krea uske liyee)
function musicalinstrument( aryan){
    switch(aryan){
        case "a":
                   var audio=new Audio ("snare.mp3");
          audio.play();
          break;

    case "b":  
            var audio=new Audio ("floor.mp3");
    audio.play();
    break;
    
    case "c":
        var audio=new Audio ("gongg.mp3");
    audio.play();
    break;
    
    
    case "d":  
        var audio=new Audio ("snare2.mp3");
    audio.play();
    break;
    
    case "e":  
        var audio=new Audio ("guitarrr.mp3");
    audio.play();
    break;
        default :
        
        case "f":  
        var audio=new Audio ("tabla.mp3");
    audio.play();
    break;
    
    case "g":
    var audio=new Audio ("flutee.mp3");
    audio.play();
    break;

        }
}

function animation (pappu){
    var bhanPu=document.querySelector("."+ pappu);
    bhanPu.classList.add("tap");

     setTimeout(function()  {
        bhanPu.classList.remove("tap");
     }, 100);
}