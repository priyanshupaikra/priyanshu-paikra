export interface CommandData {
  title: string;
  content: string;
}

export const portfolioData: Record<string, CommandData> = {
  about: {
    title: "ABOUT ME",
    content: `
Name: John Developer
Role: Full Stack Python Developer
Location: San Francisco, CA

I'm a passionate Python developer with 5+ years of experience
building scalable web applications, data pipelines, and automation
tools. I love clean code, elegant solutions, and continuous learning.

Core Skills:
• Python (Django, Flask, FastAPI)
• JavaScript (React, Node.js)
• Database Design (PostgreSQL, MongoDB)
• DevOps (Docker, AWS, CI/CD)
• Data Science (Pandas, NumPy, Scikit-learn)
    `
  },
  education: {
    title: "EDUCATION",
    content: `
🎓 Master of Science in Computer Science
   Stanford University (2018-2020)
   Specialization: Machine Learning & AI
   GPA: 3.8/4.0

🎓 Bachelor of Science in Software Engineering  
   UC Berkeley (2014-2018)
   Magna Cum Laude
   GPA: 3.9/4.0

📚 Relevant Coursework:
   • Advanced Algorithms & Data Structures
   • Machine Learning & Deep Learning
   • Database Systems & Design
   • Software Architecture & Design Patterns
    `
  },
  projects: {
    title: "FEATURED PROJECTS",
    content: `
🚀 AI-Powered Task Manager
   ├── Tech: Python, Django, React, PostgreSQL
   ├── Features: Smart task prioritization using ML
   └── GitHub: github.com/user/ai-task-manager

📊 Real-time Analytics Dashboard
   ├── Tech: Python, FastAPI, Redis, D3.js
   ├── Features: Live data visualization & monitoring
   └── GitHub: github.com/user/analytics-dashboard

🤖 Slack Bot for Team Automation
   ├── Tech: Python, Slack API, AWS Lambda
   ├── Features: Automated workflows & notifications
   └── GitHub: github.com/user/slack-automation-bot

🌐 E-commerce Platform
   ├── Tech: Django, React, Stripe API, Docker
   ├── Features: Full-featured online store with payments
   └── GitHub: github.com/user/ecommerce-platform
    `
  },
  experience: {
    title: "WORK EXPERIENCE",
    content: `
💼 Senior Python Developer | TechCorp Inc.
   📅 2021 - Present
   📍 San Francisco, CA
   • Led team of 4 developers building microservices architecture
   • Improved system performance by 40% through optimization
   • Mentored junior developers and conducted code reviews

💼 Full Stack Developer | StartupXYZ
   📅 2019 - 2021  
   📍 Remote
   • Built MVP from scratch using Django and React
   • Implemented CI/CD pipelines reducing deployment time by 60%
   • Collaborated with product team on feature development

💼 Python Developer Intern | BigTech Corp
   📅 Summer 2018
   📍 Mountain View, CA
   • Developed internal automation tools saving 20+ hours/week
   • Contributed to open-source Python libraries
   • Participated in code review process and agile development
    `
  },
  certifications: {
    title: "CERTIFICATIONS",
    content: `
🏅 AWS Certified Solutions Architect (Professional)
   Issued: 2023 | Valid until: 2026
   
🏅 Google Cloud Professional Data Engineer
   Issued: 2022 | Valid until: 2025
   
🏅 Certified Kubernetes Administrator (CKA)
   Issued: 2022 | Valid until: 2025
   
🏅 MongoDB Certified Developer Associate
   Issued: 2021 | Valid until: 2024
   
🏅 Django REST Framework Specialist
   Issued: 2020 | Valid until: 2025
    `
  },
  social: {
    title: "CONNECT WITH ME",
    content: `
🔗 Professional Links:
   • GitHub: github.com/johndeveloper
   • LinkedIn: linkedin.com/in/johndeveloper  
   • Portfolio: johndeveloper.dev
   • Email: john@johndeveloper.dev

🐦 Social Media:
   • Twitter: @johndev_codes
   • Dev.to: dev.to/johndeveloper
   • Medium: medium.com/@johndeveloper

💬 Let's connect and discuss Python, web development,
   or any interesting tech topics!
    `
  },
  help: {
    title: "AVAILABLE COMMANDS",
    content: `
📖 Command Reference:

about         - Personal information and skills overview
education     - Academic background and coursework
projects      - Featured projects and GitHub repositories  
experience    - Professional work history
certifications- Industry certifications and credentials
social        - Social media links and contact information
help          - Display this help menu
clear         - Clear the terminal screen

💡 Tips:
• Use Tab for command completion
• Use ↑/↓ arrows for command history
• Commands are case-insensitive
    `
  }
};

export const asciiArt = `
 ____            _   __      _ _       
|  _ \\ ___  _ __| |_/ _| ___| (_) ___  
| |_) / _ \\| '__| __| |_ / _ \\ | |/ _ \\ 
|  __/ (_) | |  | |_|  _| (_) | | (_) |
|_|   \\___/|_|   \\__|_|  \\___/|_|\\___/ 
                                      
    Python Developer & Code Enthusiast
    =====================================
`;

export const availableCommands = ['about', 'education', 'projects', 'experience', 'certifications', 'social', 'help', 'clear'];
