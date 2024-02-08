// set countdown date

function babyDueDate() {
	let babyDueDate = new Date("August 14, 2024").getTime();
	let now = new Date().getTime();
	let distance = babyDueDate - now;

	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById(
		"babyDueDate-timer"
	).innerHTML = `${days} days ${hours} hr ${minutes} mins ${seconds} s`;
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("babyDueDate-timer").innerHTML = `Baby Due Date`;
	}
}
setInterval(babyDueDate, 1000);
