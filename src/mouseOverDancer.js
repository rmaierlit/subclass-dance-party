var MouseOverDancer = function(top, left, timeBetweenSteps) {
  OtherDancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('src', 'bowie.png');
  this.top = top;
  this.$node.mouseover(this.mouseOver.bind(this));
  this.$node.mouseout(this.mouseOut.bind(this));
  this.$node.addClass('small');
};

MouseOverDancer.prototype = Object.create(OtherDancer.prototype);
MouseOverDancer.prototype.constructor = MouseOverDancer;

MouseOverDancer.prototype.mouseOver = function() {
  this.$node.addClass('big');
  this.$node.css('top', '' + (this.top - 150) + 'px');
};

MouseOverDancer.prototype.mouseOut = function() {
  this.$node.removeClass('big');
  this.$node.css('top', '' + this.top + 'px');
};

MouseOverDancer.prototype.flip = function() {
  this.$node.attr('src', 'bowie.png');
};

MouseOverDancer.prototype.unflip = function() {
  this.$node.attr('src', 'bowiegrey.png');
};

MouseOverDancer.prototype.lineUp = function(offset) {
  this.top = ($('body').height() * .6) + (310 - this.$node.height());
  this.setPosition(this.top, offset);
};
