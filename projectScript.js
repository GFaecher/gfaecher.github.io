document.addEventListener("DOMContentLoaded", () => {
    const projectBoxes = document.querySelectorAll(".project-box");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                entry.target.classList.remove("hidden");
            } else {
                entry.target.classList.remove("visible");
                entry.target.classList.add("hidden");
            }
        });
    }, {
        threshold: 0.2
    });

    projectBoxes.forEach(box => {
        observer.observe(box);
    });
});