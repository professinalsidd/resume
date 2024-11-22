export const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export const DATA = {
  skills: [
    {
      label: "Frontend Development",
      details: [
        {
          name: "Core Technologies:",
          details: "HTML5, CSS, JavaScript (ES6+), React.js, React Native",
        },
        {
          name: "Frameworks & Libraries:",
          details:
            "Material UI, React Native Paper, Ant Design, React Bootstrap, Bootstrap",
        },
        {
          name: "Advanced Skills:",
          details:
            "React with TypeScript, React Native with TypeScript, Next.js, Vite",
        },
      ],
    },
    {
      label: "Backend Development",
      details: [
        {
          name: "Core Technologies:",
          details: "Node.js, Express.js",
        },
        {
          name: "Database Management:",
          details: "MongoDB",
        },
      ],
    },
    {
      label: "Development Tools",
      details: [
        {
          name: "Version Control:",
          details: "GitHub, GitLab",
        },
        {
          name: "Project Management:",
          details: "Jira",
        },
        {
          name: "Deployment Platforms:",
          details: "Vercel",
        },
      ],
    },
    {
      label: "UI/UX Design",
      details: [
        {
          name: "Design Tools:",
          details: "Figma",
        },
        {
          name: "Specialized Libraries:",
          details: "Redux Toolkit, REST API",
        },
      ],
    },
  ],

  projects: [
    {
      label: "Live Projects & GitHub Repositories",
      details: [
        {
          name: "Sahej App Store",
          link: "https://apps.apple.com/in/app/sahej-health-app/id6469026236",
        },
        {
          name: "Dank Play Store",
          link: "https://play.google.com/store/apps/details?id=com.joindank.dankapp&hl=en_IN",
        },
        {
          name: "NextGenCoders Program Web",
          link: "https://nextgencodersprogram.online/",
        },
        {
          name: "PixelWaves web",
          link: "https://pixel-waves-web.vercel.app/",
        },
        {
          name: "Panoram Apk",
          link: "https://www.mediafire.com/file/4xrbe7jxfecd5vp/panorama.apk/file",
        },
        {
          name: "Beans Apk",
          link: "https://www.mediafire.com/file/jcuuljue7ju6a4a/beans.apk/file",
        },
        {
          name: "Goal Apk",
          link: "https://www.mediafire.com/file/kfmoe7tnb9h20yi/goal.apk/file",
        },
        {
          name: "Railway Apk",
          link: "https://www.mediafire.com/file/h7vaod7j7ndafim/railway.apk/file",
        },
        {
          name: "Vantaan taxi web",
          link: "",
        },
        {
          name: "Stock hisab web",
          link: "",
        },
        {
          name: "Fixcel web",
          link: "",
        },
      ],
    },
  ],
  experience: [
    {
      role: "Frontend Developer",
      company: "CompletumHealth, US",
      duration: "Aug 2023 – Feb 2024",
      details: [
        "Developed Sahej App, a mobile application using React Native CLI.",
        "Implemented advanced UI components with React Native Paper.",
        "Managed state and side effects using Redux-Saga.",
        "Integrated camera functionality and designed HTML/CSS website templates.",
        "Collaborated on UI/UX designs using Figma.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Dank, UK",
      duration: "Feb 2023 – Jul 2023",
      details: [
        "Developed a mobile application with React Native CLI and TypeScript for scalability.",
        "Collaborated with cross-functional teams to deliver a high-quality product.",
        "Built responsive web interfaces using Material UI and React.js.",
        "Leveraged TypeScript for maintainable and robust code.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Wonder Pillars Technology Pvt. Ltd., India",
      duration: "Sep 2021 – Feb 2023",
      details: [
        "Developed taxi information systems, fixing bugs and ensuring core functionality.",
        "Utilized React.js, REST APIs, HTML5, and CSS.",
        "Designed and built a user-friendly stock market platform from scratch.",
        "Contributed to various UI modules for a construction company.",
      ],
    },
  ],
};
