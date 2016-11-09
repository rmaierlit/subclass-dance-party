var Dancer = function(top, left, timeBetweenSteps) {
  // x = Object.create(Dancer);
  this.$node = $('<img class="dancer">');

  this.step();

  this.setPosition(top, left);

  this.timeBetweenSteps = timeBetweenSteps;

  if (window.dancers) {
    window.dancers.push(this);
  }
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(offset) {
  this.setPosition(($('body').height() * .6) + (300 - this.$node.height()), offset);
};

Dancer.prototype.split = function(offset, left) {
  this.setPosition(offset, left);
};