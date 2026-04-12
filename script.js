document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
        });
    }, observerOptions);

    // Observe all h1, .graphic, .caption-group, and p elements
    document.querySelectorAll('.month h1, .graphic, .caption-group, .month p').forEach(el => {
        observer.observe(el);
    });
});