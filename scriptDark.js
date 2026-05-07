function tamni_rezim(){
  if(document.body.style.backgroundColor !== "black"){
    document.body.style.backgroundColor = "black";
    tamno.innerHTML = "Svetli režim";
  } 
  else {
    document.body.style.backgroundColor = "#e4c8f0";
    tamno.innerHTML = "Tamni režim";
  }
}