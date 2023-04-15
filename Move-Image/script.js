const img = document.querySelector('img');
const step = 10; // number of pixels to move the image each time

window.addEventListener('keydown', (event) => {
	// determine the direction of the movement based on the arrow key that was pressed
	let x = 0;
	let y = 0;
	switch (event.keyCode) {
		case 37: // left arrow
			x = -step;
			break;
		case 38: // up arrow
			y = -step;
			break;
		case 39: // right arrow
			x = step;
			break;
		case 40: // down arrow
			y = step;
			break;
		default:
			return; // if the key pressed is not an arrow key, exit function
	}

	// update the position of the image
	img.style.left = `${img.offsetLeft + x}px`;
	img.style.top = `${img.offsetTop + y}px`;
});

