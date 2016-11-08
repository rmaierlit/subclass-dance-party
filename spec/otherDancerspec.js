describe('otherDancer', function() {

  var otherDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    otherDancer = new OtherDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(otherDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a toggle the class', function() {
    sinon.spy(otherDancer.$node, 'toggleClass');
    otherDancer.step();
    expect(otherDancer.$node.toggleClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {

      sinon.spy(otherDancer, 'step');
      expect(otherDancer.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(otherDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(otherDancer.step.callCount).to.be.equal(2);
    });
  });
});
