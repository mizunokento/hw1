
function search(){

  var yellowdir=0;

  function movementdirections(){


    function yellowmoveright(){

      right();
      yellowdir=1;
          while(((getColor()!="blue")&&(getColor()!="red")&&(getColor()!="yellow"))){
      right();
    }
  }



  function yellowmovedown(){
    yellowdir=0;
    down();
    while(((getColor()!="blue")&&(getColor()!="red")&&(getColor()!="yellow"))){
      down();
    }}


  function bluemove(){
    down();
    while(((getColor()!="blue")&&(getColor()!="red")&&(getColor()!="yellow"))){
      down();}
  }

  function redmove(){
    left();
    while(((getColor()!="blue")&&(getColor()!="red")&&(getColor()!="yellow"))){
      left();}
  }




  if ((getColor()=="yellow")&&(yellowdir==0)){
    yellowmoveright();
  }

  else if ((getColor()=="yellow")&&(yellowdir==1)){
    yellowmovedown();
  }

  else if (getColor()=="blue"){
    bluemove();
  }

  else if (getColor()=="red"){
    redmove();
  }
}
}

var infiniterun=0;
while (infiniterun==0){
  search();}
