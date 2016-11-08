var OtherDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

OtherDancer.prototype = Object.create(Dancer.prototype);
OtherDancer.prototype.constructor = OtherDancer;

OtherDancer.prototype.oldStep = OtherDancer.prototype.step;
OtherDancer.prototype.step = function() {

  this.oldStep();
  this.$node.toggleClass('big');
  //this.$node.toggle();
};


//ideas:
//on each step, change the size of the element
//on each step, rotate the element x degrees
//on each step, move the element up and down
//on each step, flip? the element left to right
//on each step, change color
//on each step, change the image
//