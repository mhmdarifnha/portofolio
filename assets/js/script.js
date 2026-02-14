const html = document.documentElement;
const toggle = document.getElementById("themeToggle");
const toggleMobile = document.getElementById("themeToggleMobile");

function setTheme(isDark) {
    if (isDark) {
        html.classList.add("dark");
        localStorage.setItem("theme", "dark");
        toggle.checked = true;
        toggleMobile.checked = true;
    } else {
        html.classList.remove("dark");
        localStorage.setItem("theme", "light");
        toggle.checked = false;
        toggleMobile.checked = false;
    }
}

setTheme(localStorage.getItem("theme") === "dark");

toggle.addEventListener("change", () => setTheme(toggle.checked));
toggleMobile.addEventListener("change", () =>
    setTheme(toggleMobile.checked),
);

/* Hamburger */
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});
