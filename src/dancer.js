var Dancer = function(top, left, timeBetweenSteps) {
  // x = Object.create(Dancer);
  this.$node = $('<img class="dancer">');

  this.step();

  this.setPosition(top, left);

  this.timeBetweenSteps = timeBetweenSteps;

  window.dancers.push(this);
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
  this.setPosition($('body').height() / 2, offset);
};
