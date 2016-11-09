var BowieJumper = function(top, left, timeBetweenSteps) {
  OtherDancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('src', 'bowiejumper.png');
  this.$node.height(150);
  this.top = top;
};

BowieJumper.prototype = Object.create(OtherDancer.prototype);
BowieJumper.prototype.constructor = BowieJumper;

BowieJumper.prototype.flip = function() {
  var position = this.$node.position();
  position.top = this.top + 50;
  this.setPosition(position.top, position.left);
};

BowieJumper.prototype.unflip = function() {
  var position = this.$node.position();
  position.top = this.top - 50;
  this.setPosition(position.top, position.left);
}; 

BowieJumper.prototype.lineUp = function(offset) {
  this.top = ($('body').height() * .6) + (250 - this.$node.height());
  this.setPosition(this.top, offset);
};