const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const backTop = document.getElementById("backTop");

const mobileBreakpoint = 760;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
	document.body.classList.add("light");
}

if (themeToggle) {
	themeToggle.setAttribute(
		"aria-pressed",
		String(document.body.classList.contains("light")),
	);

	themeToggle.addEventListener("click", () => {
		document.body.classList.toggle("light");

		const isLight = document.body.classList.contains("light");
		themeToggle.setAttribute("aria-pressed", String(isLight));
		localStorage.setItem("theme", isLight ? "light" : "dark");
	});
}

if (backTop) {
	const toggleBackTopVisibility = () => {
		backTop.classList.toggle("show", window.scrollY > 320);
	};

	window.addEventListener("scroll", toggleBackTopVisibility);

	backTop.addEventListener("click", () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	});
}

if (menuToggle && mainNav) {
	const closeMenu = () => {
		mainNav.classList.remove("open");
		menuToggle.setAttribute("aria-expanded", "false");
	};

	menuToggle.addEventListener("click", () => {
		if (window.innerWidth <= mobileBreakpoint) {
			const isOpen = mainNav.classList.toggle("open");
			menuToggle.setAttribute("aria-expanded", String(isOpen));
		}
	});

	mainNav.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", () => {
			if (window.innerWidth <= mobileBreakpoint) {
				closeMenu();
			}
		});
	});

	window.addEventListener("resize", () => {
		if (window.innerWidth > mobileBreakpoint) {
			closeMenu();
		}
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && mainNav.classList.contains("open")) {
			closeMenu();
		}
	});
}
