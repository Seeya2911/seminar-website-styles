const seminars = [
    { title: "Emerging Trends in Quantum Computing: Opportunities and Challenges", description: "This seminar explores the latest advancements in quantum computing technology, discussing its potential applications in fields like cryptography, machine learning, and scientific simulations. It covers the fundamental principles of quantum computing, current research challenges, and future prospects in this rapidly evolving field.", timing: "10:00 AM - 12:00 PM", venue: "Auditorium A" },
    { title: "Ethical Considerations in Artificial Intelligence Research and Development", description: "This seminar delves into the ethical implications of AI technologies, examining issues such as bias in algorithms, privacy concerns, and the impact of AI on society. It discusses ethical frameworks and guidelines for AI research and development, emphasizing responsible AI design and deployment practices.", timing: "2:00 PM - 4:00 PM", venue: "Room B" },
    { title: "Advances in Biomedical Engineering: Innovations for Improved Healthcare", description: "This seminar highlights recent breakthroughs in biomedical engineering, focusing on innovations in medical devices, tissue engineering, and biomaterials. It explores how these technologies are transforming healthcare delivery, enhancing patient outcomes, and addressing global health challenges.", timing: "1:00 PM - 3:00 PM", venue: "Conference Hall" },
    { title: "Sustainable Development Goals (SDGs): Achieving Environmental and Social Sustainability", description: "This seminar examines the United Nations Sustainable Development Goals (SDGs) and their role in promoting global sustainability. It discusses strategies for achieving environmental conservation, reducing inequalities, and fostering inclusive economic growth. Case studies and best practices from around the world are analyzed.", timing: "11:00 AM - 1:00 PM", venue: "Auditorium B" },
    { title: "Digital Transformation in Business: Strategies for Competitive Advantage", description: "This seminar explores the impact of digital technologies on business operations, marketing strategies, and customer engagement. It covers topics such as digital innovation, e-commerce trends, big data analytics, and the adoption of AI and machine learning in business decision-making.", timing: "3:00 PM - 5:00 PM", venue: "Room C" }
];

document.addEventListener('DOMContentLoaded', () => {
    const mainSection = `
        <h3>Latest Seminars</h3>
        <div id="seminar-list"></div>
    `;

    const mainContainer = document.createElement('div');
    mainContainer.className = 'main';
    mainContainer.innerHTML = mainSection;

    const hero = document.querySelector('.hero');
    document.body.insertBefore(mainContainer, hero.nextSibling);

    const seminarList = document.getElementById('seminar-list');
    seminars.forEach(seminar => {
        const seminarCard = document.createElement('div');
        seminarCard.className = 'seminar-card';
        seminarCard.innerHTML = `
            <h4>${seminar.title}</h4>
            <p>Description: ${seminar.description}</p>
            <p>Timing: ${seminar.timing}</p>
            <p>Venue: ${seminar.venue}</p>
        `;
        seminarList.appendChild(seminarCard);
    });
});