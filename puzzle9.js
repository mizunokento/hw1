
var colors=["blue","red","yellow","blue","red","blue","blue","blue"];

//setColor(colors[0]);


function Down(){
function repeatDown(total) {
  var count = 0;
  var arraycount=0;
  while (count < total) {
    down();
    colors[arraycount]=getColor();
    count = count + 1;
    arraycount = arraycount + 1;
  }
}
repeatDown(9);
}


Down();

right();

function opensesame(){
function onedoor(total){
  var count = 0;
  var arraycount = 0;
  while (count < total){
    setColor(colors[arraycount]);
             count = count +1;
             arraycount = arraycount+1;
    right();
    up();
             }
}
  onedoor(8);
}

opensesame();

up();
