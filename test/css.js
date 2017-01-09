describe("DevMtn-CSS-Store", function() {
	var frame, containerHeader;

	beforeAll(function() {
		frame = quixote.createFrame({
			src: "/"
		});
	});

	afterAll(function() {
		frame.remove();
	});

	beforeEach(function() {
		frame.reload();
		containerHeader = frame.get("#container-header");
	});

	it('Header container is 100% in width', function() {
		containerHeader.assert({
			width: '100%'
		}, "The header container should have a width of 100%");
	});
});