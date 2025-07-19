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
   └── <a href="https://github.com/user/ai-task-manager" target="_blank" class="text-blue-400 hover:text-blue-300 underline">GitHub: github.com/user/ai-task-manager</a>

📊 Real-time Analytics Dashboard
   ├── Tech: Python, FastAPI, Redis, D3.js
   ├── Features: Live data visualization & monitoring
   └── <a href="https://github.com/user/analytics-dashboard" target="_blank" class="text-blue-400 hover:text-blue-300 underline">GitHub: github.com/user/analytics-dashboard</a>

🤖 Slack Bot for Team Automation
   ├── Tech: Python, Slack API, AWS Lambda
   ├── Features: Automated workflows & notifications
   └── <a href="https://github.com/user/slack-automation-bot" target="_blank" class="text-blue-400 hover:text-blue-300 underline">GitHub: github.com/user/slack-automation-bot</a>

🌐 E-commerce Platform
   ├── Tech: Django, React, Stripe API, Docker
   ├── Features: Full-featured online store with payments
   └── <a href="https://github.com/user/ecommerce-platform" target="_blank" class="text-blue-400 hover:text-blue-300 underline">GitHub: github.com/user/ecommerce-platform</a>
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
   • <a href="https://github.com/johndeveloper" target="_blank" class="text-blue-400 hover:text-blue-300 underline">GitHub: github.com/johndeveloper</a>
   • <a href="https://linkedin.com/in/johndeveloper" target="_blank" class="text-blue-400 hover:text-blue-300 underline">LinkedIn: linkedin.com/in/johndeveloper</a>
   • <a href="https://johndeveloper.dev" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Portfolio: johndeveloper.dev</a>
   • <a href="mailto:john@johndeveloper.dev" class="text-blue-400 hover:text-blue-300 underline">Email: john@johndeveloper.dev</a>

🐦 Social Media:
   • <a href="https://twitter.com/johndev_codes" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Twitter: @johndev_codes</a>
   • <a href="https://dev.to/johndeveloper" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Dev.to: dev.to/johndeveloper</a>
   • <a href="https://medium.com/@johndeveloper" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Medium: medium.com/@johndeveloper</a>

💬 Let's connect and discuss Python, web development,
   or any interesting tech topics!
    `
  },
  connect: {
    title: "🌐 LET'S CONNECT!",
    content: `
┌─────────────────────────────────────────────────────────┐
│                    SOCIAL CONNECTIONS                   │
└─────────────────────────────────────────────────────────┘

📧 <a href="mailto:john@johndeveloper.dev" class="text-green-400 hover:text-green-300 underline font-bold">john@johndeveloper.dev</a>
   → Email me for collaborations and opportunities

🐙 <a href="https://github.com/johndeveloper" target="_blank" class="text-green-400 hover:text-green-300 underline font-bold">GitHub</a>
   → Check out my code and contributions

💼 <a href="https://linkedin.com/in/johndeveloper" target="_blank" class="text-green-400 hover:text-green-300 underline font-bold">LinkedIn</a>
   → Connect professionally and see my experience

🐦 <a href="https://twitter.com/johndev_codes" target="_blank" class="text-green-400 hover:text-green-300 underline font-bold">Twitter</a>
   → Follow for tech updates and coding insights

📝 <a href="https://dev.to/johndeveloper" target="_blank" class="text-green-400 hover:text-green-300 underline font-bold">Dev.to</a>
   → Read my technical articles and tutorials

✍️ <a href="https://medium.com/@johndeveloper" target="_blank" class="text-green-400 hover:text-green-300 underline font-bold">Medium</a>
   → Deep dives into development topics

🌐 <a href="https://johndeveloper.dev" target="_blank" class="text-green-400 hover:text-green-300 underline font-bold">Portfolio Website</a>
   → View my complete portfolio and projects

💬 Always open to discussing Python, web development,
   AI/ML, and exciting tech opportunities!
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
connect       - Quick access to all social connections
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

export const availableCommands = ['about', 'education', 'projects', 'experience', 'certifications', 'social', 'connect', 'help', 'clear'];
