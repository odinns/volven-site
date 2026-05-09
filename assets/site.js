const links = document.querySelectorAll('nav a[href^="#"]');

for (const link of links) {
    link.addEventListener('click', () => {
        link.blur();
    });
}

const motionAllowed = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

if (motionAllowed) {
    const revealTargets = document.querySelectorAll('.hero-panel, .suite-grid article, .signal-grid article, .budget-grid article, .workflow-steps article, .variant-list article');

    const revealObserver = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (! entry.isIntersecting) {
                continue;
            }

            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
        }
    }, {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.01,
    });

    for (const target of revealTargets) {
        target.classList.add('reveal');
        revealObserver.observe(target);
    }
}
