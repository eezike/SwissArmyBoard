
document.querySelectorAll("[data-command]").forEach(
	(item) => {
		item.addEventListener("click", (e) => {
			document.querySelector("[data-command].active").classList.toggle("active");
			item.classList.toggle("active");
		});
	}
);

document.querySelectorAll("[data-tool]").forEach(
	(item) => {

		item.addEventListener("click", (e) => {
			document.querySelector("[data-tool].active").classList.toggle("active");
			item.classList.toggle("active");
		});
	}
);

document.querySelectorAll("[data-line-width]").forEach(
	(item) => {

		item.addEventListener("click", (e) => {
			document.querySelector("[data-line-width].active").classList.toggle("active")
			item.classList.toggle("active");
		});
	}
);

document.querySelectorAll("[data-color]").forEach(
	(item) => {

		item.addEventListener("click", (e) => {
			document.querySelector("[data-lcolor].active").classList.toggle("active")
			item.classList.toggle("active");
		});
	}
);
