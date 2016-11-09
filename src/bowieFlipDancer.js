var BowieFlip = function(top, left, timeBetweenSteps) {
  OtherDancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('src', 'bowieunflip.png');
};

BowieFlip.prototype = Object.create(OtherDancer.prototype);
BowieFlip.prototype.constructor = BowieFlip;

BowieFlip.prototype.flip = function() {
  this.$node.attr('src', 'bowieflip.png');
};

BowieFlip.prototype.unflip = function() {
  this.$node.attr('src', 'bowieunflip.png');
};