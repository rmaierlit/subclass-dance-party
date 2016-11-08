var OtherDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('cat');
};

OtherDancer.prototype = Object.create(Dancer.prototype);
OtherDancer.prototype.constructor = OtherDancer;

OtherDancer.prototype.oldStep = OtherDancer.prototype.step;
OtherDancer.prototype.step = function() {

  this.oldStep();
  if (this.$node.hasClass('flip')) {
    this.$node.attr('src', 'catflipped.jpg');
    this.$node.css('background-size', '120px 80px');
  } else {
    this.$node.attr('src', 'cat.jpg');
    this.$node.css('background-size', '120px 80px');
  }
  //this.$node.removeClass('dancer');
  this.$node.toggleClass('flip');

  //this.$node.toggleClass('cat');
  //this.$node.toggleClass('big');
  //this.$node.toggle();
};

OtherDancer.prototype.lineUp = function(offset) {
  this.setPosition(($('body').height() / 2) - 10, offset);
};


//ideas:
//on each step, change the size of the element
//on each step, rotate the element x degrees
//on each step, move the element up and down
//on each step, flip? the element left to right
//on each step, change color
//on each step, change the image
//