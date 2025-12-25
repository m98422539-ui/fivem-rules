document.querySelectorAll(".title").forEach(btn => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;

        document.querySelectorAll(".content").forEach(c => {
            if (c !== content) c.style.display = "none";
        });

        content.style.display =
            content.style.display === "block" ? "none" : "block";
    });
});
