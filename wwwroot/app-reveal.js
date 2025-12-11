// WAYPOINT: SCROLL-REVEAL
document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".wt-reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            }
        });
    }, { threshold: 0.2 });

    reveals.forEach(el => observer.observe(el));
});

// WAYPOINT: VIDEO OVERLAY CLICK HANDLER
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("wt-video-overlay")) {
        const btn = e.target;
        const videoId = btn.dataset.videoTarget;
        const video = document.getElementById(videoId);

        btn.classList.add("is-hidden");
        video.play();
    }
});
