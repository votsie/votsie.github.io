// Project data
const projects = {
    project1: {
        title: "Project 1",
        shortDescription: "A futuristic web application",
        fullDescription: "This project showcases a modern web application built with cutting-edge technologies. It features a responsive design, smooth animations, and an intuitive user interface. The application demonstrates advanced frontend development techniques and best practices in modern web development.",
        image: "https://via.placeholder.com/1280x720"
    },
    project2: {
        title: "Project 2",
        shortDescription: "AI-powered dashboard",
        fullDescription: "An innovative dashboard that leverages artificial intelligence to provide real-time insights and analytics. The project incorporates machine learning algorithms to process and visualize complex data sets, making it easier for users to make data-driven decisions.",
        image: "https://via.placeholder.com/1280x720"
    },
    project3: {
        title: "Project 3",
        shortDescription: "Mobile-first application",
        fullDescription: "A revolutionary mobile application that prioritizes user experience and performance. Built with modern frameworks and optimized for various devices, this project demonstrates the importance of mobile-first design principles and responsive development.",
        image: "https://via.placeholder.com/1280x720"
    }
};

// Initialize project cards with data
document.addEventListener('DOMContentLoaded', () => {
    // Interactive gradient effect
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
    };

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();

    // Add click event listeners to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            const project = projects[projectId];
            
            if (project) {
                // Update modal content
                const modal = document.getElementById('projectModal');
                const modalImage = modal.querySelector('.modal-image');
                const modalTitle = modal.querySelector('.project-title');
                const modalText = modal.querySelector('.project-text');
                
                modalImage.src = project.image;
                modalTitle.textContent = project.title;
                modalText.textContent = project.fullDescription;
                
                // Show modal
                const modalInstance = new bootstrap.Modal(modal);
                modalInstance.show();
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll animation for sections
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
});

// Project Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
    const modalTitle = document.querySelector('.modal-title');
    const modalImage = document.querySelector('.modal-image');
    const projectTitle = document.querySelector('.project-title');
    const projectText = document.querySelector('.project-text');
    const featuresList = document.querySelector('.features-list');
    const technologiesList = document.querySelector('.technologies-list');

    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const project = projects[projectId];

            if (project) {
                modalTitle.textContent = project.title;
                modalImage.src = project.image;
                modalImage.alt = project.title;
                projectTitle.textContent = project.title;
                projectText.textContent = project.fullDescription;

                // Clear and populate features list
                featuresList.innerHTML = '';
                project.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.textContent = feature;
                    featuresList.appendChild(li);
                });

                // Clear and populate technologies list
                technologiesList.innerHTML = '';
                project.technologies.forEach(tech => {
                    const li = document.createElement('li');
                    li.textContent = tech;
                    technologiesList.appendChild(li);
                });

                projectModal.show();
            }
        });
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animation for sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.section').forEach((section) => {
    observer.observe(section);
}); 