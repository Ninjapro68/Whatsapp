var campo = document.getElementsByClassName("input")[1]; // Grabs the input field
contador = 0;
function dispatch(target, eventType, char) {
   var evt = document.createEvent("TextEvent");    
   evt.initTextEvent (eventType, true, true, window, char, 0, "en-US");
   target.focus();
   target.dispatchEvent(evt);
}
function spam(){
  if (contador<100){   // How many times spam will exexcute
    dispatch(campo, "textInput", "You are being spammed by Ninjapro68's bot :), How mad are you?"); // Msg to be texted 
    var input = document.getElementsByClassName("icon btn-icon icon-send"); //Grabs the send button
    input[0].click(); // Clicks the send button
    contador++;
    setTimeout(spam,0.5); // Add delay to the recursive function, otherwise it won't work, can change it if you want though :) 
  }
}
spam();
