const projects = {
    project1: {
        title: "Badge Generator",
        description: "Система генерации и управления бейджами с QR-кодами для продавцов. Проект включает в себя веб-интерфейс для создания бейджей, систему аутентификации, автоматическую генерацию QR-кодов и интеграцию с базой данных продавцов. Система обеспечивает безопасное хранение данных и удобный процесс верификации.",
        image: "projects/project-images/badge-generator.png",
        technologies: [
            "Python (Flask) для бэкенда",
            "PostgreSQL для хранения данных",
            "Docker для контейнеризации",
            "Nginx для проксирования и SSL",
            "qrcode для генерации QR-кодов"
        ],
        features: [
            "Генерация уникальных QR-кодов для бейджей",
            "Интеграция с базой данных продавцов",
            "Безопасная аутентификация и авторизация",
            "Автоматическое создание и сохранение бейджей",
            "HTTPS-защита и SSL-сертификация",
            "Контейнеризация с Docker для простого развертывания"
        ],
        badges: [
            "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
            "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
            "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
            "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
            "https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white"
        ]
    },
    project2: {
        title: "Network Monitoring System",
        description: "A comprehensive network monitoring solution that provides real-time insights into network performance, security, and resource utilization. Features include automated alerts, detailed analytics, and customizable dashboards.",
        image: "projects/project-images/project2.png",
        technologies: [
            "Python",
            "Zabbix",
            "Grafana",
            "PostgreSQL",
            "Docker"
        ],
        features: [
            "Real-time network monitoring",
            "Automated alerting system",
            "Customizable dashboards",
            "Performance analytics",
            "Resource utilization tracking"
        ],
        badges: [
            "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
            "https://img.shields.io/badge/Zabbix-FF0000?style=for-the-badge&logo=zabbix&logoColor=white",
            "https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white"
        ]
    },
    project3: {
        title: "Database Management Tool",
        description: "A powerful database management and optimization tool that helps administrators monitor, maintain, and optimize database performance. Includes features for query optimization, backup management, and performance analytics.",
        image: "projects/project-images/project3.png",
        technologies: [
            "Python",
            "PostgreSQL",
            "MySQL",
            "Docker",
            "FastAPI"
        ],
        features: [
            "Database performance monitoring",
            "Query optimization",
            "Automated backup management",
            "Performance analytics",
            "Multi-database support"
        ],
        badges: [
            "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
            "https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white",
            "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white"
        ]
    },
    project4: {
        title: "Server Automation Platform",
        description: "An advanced server automation platform that streamlines server management tasks through automated workflows, configuration management, and deployment automation. Reduces manual intervention and improves operational efficiency.",
        image: "projects/project-images/project4.png",
        technologies: [
            "Python",
            "Ansible",
            "Docker",
            "Linux",
            "REST API"
        ],
        features: [
            "Automated server provisioning",
            "Configuration management",
            "Deployment automation",
            "Workflow orchestration",
            "Monitoring integration"
        ],
        badges: [
            "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
            "https://img.shields.io/badge/Ansible-EE0000?style=for-the-badge&logo=ansible&logoColor=white",
            "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"
        ]
    },
    project5: {
        title: "Security Monitoring System",
        description: "A comprehensive security monitoring system that provides real-time threat detection, vulnerability assessment, and security analytics. Helps organizations maintain robust security posture and respond to threats effectively.",
        image: "projects/project-images/project5.png",
        technologies: [
            "Python",
            "ELK Stack",
            "Docker",
            "REST API",
            "PostgreSQL"
        ],
        features: [
            "Real-time threat detection",
            "Vulnerability assessment",
            "Security analytics",
            "Automated alerts",
            "Compliance reporting"
        ],
        badges: [
            "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
            "https://img.shields.io/badge/Elastic_Search-005571?style=for-the-badge&logo=elasticsearch&logoColor=white",
            "https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white"
        ]
    },
    project6: {
        title: "Cloud Infrastructure Manager",
        description: "A powerful cloud infrastructure management platform that simplifies the deployment and management of cloud resources. Provides unified interface for multiple cloud providers and automated resource optimization.",
        image: "projects/project-images/project6.png",
        technologies: [
            "Python",
            "Terraform",
            "Docker",
            "AWS",
            "Azure"
        ],
        features: [
            "Multi-cloud management",
            "Resource automation",
            "Cost optimization",
            "Infrastructure as Code",
            "Automated scaling"
        ],
        badges: [
            "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
            "https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white",
            "https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white"
        ]
    }
}; 