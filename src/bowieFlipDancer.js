var BowieFlip = function(top, left, timeBetweenSteps) {
  OtherDancer.call(this, top, left, timeBetweenSteps);
};

BowieFlip.prototype = Object.create(OtherDancer.prototype);
BowieFlip.prototype.constructor = BowieFlip;

BowieFlip.prototype.flip = function() {
  this.$node.attr('src', 'bowieflip.png');
  this.$node.css('background-size', '120px 80px');
};

BowieFlip.prototype.unflip = function() {
  this.$node.attr('src', 'bowieunflip.png');
  this.$node.css('background-size', '120px 80px');
};