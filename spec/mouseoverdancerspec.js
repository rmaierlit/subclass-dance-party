describe('MouseOverDancer', function() {

  var mouseoverdancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    mouseoverdancer = new MouseOverDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(mouseoverdancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {

      sinon.spy(mouseoverdancer, 'step');
      expect(mouseoverdancer.step.callCount).to.be.equal(0);

      clock.tick(timeBetweenSteps);

      expect(mouseoverdancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(mouseoverdancer.step.callCount).to.be.equal(2);
    });
  });
});
