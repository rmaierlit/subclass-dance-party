var OtherDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

OtherDancer.prototype = Object.create(Dancer.prototype);
OtherDancer.prototype.constructor = OtherDancer;

OtherDancer.prototype.oldStep = OtherDancer.prototype.step;

OtherDancer.prototype.step = function() {

  this.oldStep();
  if (this.$node.hasClass('flip')) {
    this.flip();
  } else {
    this.unflip();
  }

  this.$node.toggleClass('flip');
};

OtherDancer.prototype.lineUp = function(offset) {
  this.setPosition(($('body').height() / 2) - 10, offset);
};

OtherDancer.prototype.flip = function() {
  this.$node.attr('src', 'catflipped.jpg');
  this.$node.css('background-size', '120px 80px');
};

OtherDancer.prototype.unflip = function() {
  this.$node.attr('src', 'cat.jpg');
  this.$node.css('background-size', '120px 80px');
};


//ideas:
//on each step, change the size of the element
//on each step, rotate the element x degrees
//on each step, move the element up and down
//on each step, flip? the element left to right
//on each step, change color
//on each step, change the image
//