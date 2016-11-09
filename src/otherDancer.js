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

OtherDancer.prototype.flip = function() {
  this.$node.attr('src', 'catflipped.jpg');
};

OtherDancer.prototype.unflip = function() {
  this.$node.attr('src', 'cat.jpg');
};
