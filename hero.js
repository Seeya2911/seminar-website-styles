document.addEventListener('DOMContentLoaded', () => {
    const heroSection = `
        <h2>Higher Studies</h2>
        <p>Number of seminars provided: <strong id="total-seminars">50</strong></p>
        <p>Number of seminars attended: <strong id="seminars-attended">30</strong></p>
    `;

    const heroContainer = document.createElement('div');
    heroContainer.className = 'hero';
    heroContainer.innerHTML = heroSection;

    const nav = document.querySelector('.navbar');
    document.body.insertBefore(heroContainer, nav.nextSibling);
});