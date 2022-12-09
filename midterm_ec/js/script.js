const targetNav = document.querySelector(".change-nav");

// Change nav size
const changeClassName = () => {
	const smWindowSize = 600;

	if (window.innerWidth >= smWindowSize) {
		targetNav.classList.toggle("massive");
	} else {
		targetNav.classList.toggle("mini");
	}
};

window.addEventListener("resize", changeClassName);

// Change text color
