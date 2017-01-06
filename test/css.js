describe("DevMtn-CSS-Store", function() {
	var frame, containerHeader;

	before(function(done) {
		frame = quixote.createFrame({
			src: "/"
		}, done);
	});

	after(function() {
		frame.remove();
	});

	beforeEach(function(done) {
		frame.reload(done);
		containerHeader = frame.get("#container-header");
	}, done);

	it('Header container is 100% in width', function() {
		containerHeader.assert({
			width: '100%'
		}, "The header container should have a width of 100%");
	});
});