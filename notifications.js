const notifications = [
    { title: "New Seminar on AI Ethics and Regulation", update: "Explore the ethical considerations and regulatory frameworks shaping the development and deployment of artificial intelligence technologies. ", date: "June 1, 2024" },
    { title: "Quantum Computing Workshop: Recent Advances and Applications", update: "Delve into the latest advancements in quantum computing, including breakthroughs in quantum supremacy, error correction techniques, and applications in chemistry and optimization problems.", date: "June 3, 2024" },
    { title: "Biomedical Engineering Symposium: Innovations in Medical Devices", update: "Explore cutting-edge innovations in biomedical engineering, focusing on the development of wearable health monitors, bioelectronics, and advancements in telemedicine technologies.", date: "June 5, 2024" },
    { title: "Digital Transformation in Business: Strategies for Sustainability and Growth", update: " Learn about digital transformation strategies that drive business sustainability and competitive advantage. Topics include IoT integration, blockchain applications, and data analytics for business decision-making.", date: "June 7, 2024" },
    { title: "Sustainable Development Goals (SDGs) Seminar Series", update: "Join discussions on achieving the United Nations Sustainable Development Goals (SDGs), with sessions on climate action, biodiversity conservation, and sustainable urban planning.", date: "June 9, 2024" }
];

document.addEventListener('DOMContentLoaded', () => {
    const notificationList = document.getElementById('notification-list');
    if (notificationList) {
        notifications.forEach(notification => {
            const notificationCard = document.createElement('div');
            notificationCard.className = 'notification-card';
            notificationCard.innerHTML = `
                <h4>${notification.title}</h4>
                <p>Update: ${notification.update}</p>
                <p>Date: ${notification.date}</p>
                <button class="apply-btn">Apply</button>
            `;
            notificationList.appendChild(notificationCard);
        });
    }
});
