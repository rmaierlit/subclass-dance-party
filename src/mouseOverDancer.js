var MouseOverDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('src', 'bowie.png');
  this.$node.mouseover(this.mouseOver.bind(this));
  this.$node.mouseout(this.mouseOut.bind(this));
};

MouseOverDancer.prototype = Object.create(Dancer.prototype);
MouseOverDancer.prototype.constructor = MouseOverDancer;

MouseOverDancer.prototype.oldStep = MouseOverDancer.prototype.step;

MouseOverDancer.prototype.step = function() {
  this.oldStep();
};

MouseOverDancer.prototype.mouseOver = function() {
  this.$node.addClass('bowie');
};

MouseOverDancer.prototype.mouseOut = function() {
  this.$node.removeClass('bowie');
};

// MouseOverDancer.prototype.lineUp = function(offset) {
//   this.setPosition(($('body').height() / 2) - 10, offset);
// };
