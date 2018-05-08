var cameraTracker;
function setup() {
	var videoInput = createCapture();
	videoInput.size(400,300);
	videoInput.position(0,0);

	var canvas = createCanvas(400,300);
	canvas.position(0,0);

	cameraTracker = new clm.tracker();
	cameraTracker.init(pModel);
	cameraTracker.start(videoInput.elt);

	noStroke();
}

function draw() {
	clear();

	var positions = cameraTracker.getCurrentPosition();

	for (var i=0; i<positions.length; i++) {
		fill(map(positions[i][0], width*0.33, width*0.66, 0, 255), map(positions[i][1], height*0.33, height*0.66, 0, 255), 255);

		 ellipse(positions[i][0], positions[i][1], 8, 8);
	}
}