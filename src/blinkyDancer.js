var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('src', 'glittercat.gif');
  this.$node.css('height', '100px');
  this.$node.css('width', '150px');

};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.oldStep = BlinkyDancer.prototype.step;
BlinkyDancer.prototype.step = function() {

  this.oldStep();
  this.$node.toggle();
};