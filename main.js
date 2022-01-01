// const searchBox = document.querySelector(".search-box");
// const navBtnContainer = document.querySelector(".nav-btn-container");
// const searchBtn = document.querySelector(".search-btn");
// const closeBtn = document.querySelector(".close-btn");

// searchBtn.addEventListener("click", () => {
//   searchBox.classList.add("active");
//   navBtnContainer.classList.add("active");
// });

// closeBtn.addEventListener("click", () => {
//   searchBox.classList.remove("active");
//   navBtnContainer.classList.remove("active");
// });
const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});
