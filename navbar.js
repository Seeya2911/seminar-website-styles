document.addEventListener('DOMContentLoaded', () => {
    const navbar = `
        <div class="logo">
            <img src="logo.jpg" alt="Logo">
        </div>
        <div class="nav-links">
            <a href="index.html">Home</a>
            <a href="notifications.html">Notifications</a>
            <a href="#contact">Contact</a>
        </div>
    `;

    const navContainer = document.createElement('div');
    navContainer.className = 'navbar';
    navContainer.innerHTML = navbar;

    document.body.insertBefore(navContainer, document.body.firstChild);
});