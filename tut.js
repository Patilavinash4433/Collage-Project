function toggleDetails(detailsId) {
    const detailsElement = document.getElementById(detailsId);
    if (detailsElement.classList.contains('hidden')) {
        detailsElement.classList.remove('hidden');
    } else {
        detailsElement.classList.add('hidden');
    }
}
let split = new SplitText("#title");
gsap.from("#leftfish", {
            scrollTrigger: {
                scrub: true,
            },
            x: -150,
        });

        gsap.from("#rightfish", {
            scrollTrigger: {
                scrub: true,
            },
            x: 200,
        });
        
