const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const backTop = document.getElementById("backTop");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
	document.body.classList.add("light");
}

themeToggle.addEventListener("click", () => {
	document.body.classList.toggle("light");
	localStorage.setItem(
		"theme",
		document.body.classList.contains("light") ? "light" : "dark",
	);
});

window.addEventListener("scroll", () => {
	if (window.scrollY > 320) {
		backTop.classList.add("show");
	} else {
		backTop.classList.remove("show");
	}
});

backTop.addEventListener("click", () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
});

menuToggle.addEventListener("click", () => {
	if (window.innerWidth <= 760) {
		const isOpen = mainNav.classList.toggle("open");
		menuToggle.setAttribute("aria-expanded", String(isOpen));
	}
});

mainNav.querySelectorAll("a").forEach((link) => {
	link.addEventListener("click", () => {
		if (window.innerWidth <= 760) {
			mainNav.classList.remove("open");
			menuToggle.setAttribute("aria-expanded", "false");
		}
	});
});

window.addEventListener("resize", () => {
	if (window.innerWidth > 760) {
		mainNav.classList.remove("open");
		menuToggle.setAttribute("aria-expanded", "false");
	}
});
