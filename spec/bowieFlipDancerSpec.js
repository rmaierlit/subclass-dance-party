describe('bowieFlipDancer', function() {

  var bowieFlipDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bowieFlipDancer = new BowieFlip(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bowieFlipDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a toggle the class', function() {
    sinon.spy(bowieFlipDancer.$node, 'toggleClass');
    bowieFlipDancer.step();
    expect(bowieFlipDancer.$node.toggleClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {

      sinon.spy(bowieFlipDancer, 'step');
      expect(bowieFlipDancer.step.callCount).to.be.equal(0);
      
      clock.tick(timeBetweenSteps);

      expect(bowieFlipDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bowieFlipDancer.step.callCount).to.be.equal(2);
    });
  });
});
