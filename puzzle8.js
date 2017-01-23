function Down(){
function repeatDown(total) {
  var count = 0;
  while (count < total) {
    down();
    count = count + 1;
  }
}
repeatDown(8);
right();
right();
}

function Up(){
function repeatUp(total) {
  var count = 0;
  while (count < total) {
    up();
    count = count + 1;
  }
}
repeatUp(8);
right();
right();
}

Down();
Up();
Down();
Up();
Down();
