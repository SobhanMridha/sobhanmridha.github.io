// Single source of truth for all portfolio content.
// Edit this file, then run `npm run build`.

export const site = {
  name: "Sobhan Mridha",
  fullName: "MD Sobhan Mridha",
  role: "Competitive Programmer & CSE Student",
  location: "Dhaka, Bangladesh",
  email: "sobhanmridha786@gmail.com",
  description:
    "MD Sobhan Mridha — CSE student and competitive programmer from Dhaka. ICPC Dhaka Regional participant, Codeforces Pupil, CodeChef 3★.",
  links: {
    github: "https://github.com/SobhanMridha",
    linkedin: "https://www.linkedin.com/in/sobhanmridha/",
    facebook: "https://www.facebook.com/md.sobhanmridha",
  },
};

export const nav = [
  { label: "About", href: "/about/" },
  { label: "Skills", href: "/skills/" },
  { label: "Projects", href: "/projects/" },
  { label: "Achievements", href: "/achievements/" },
  { label: "Contact", href: "/contact/" },
];

export const social = [
  { label: "GitHub", href: site.links.github, icon: "/assets/images/social/github.png" },
  { label: "LinkedIn", href: site.links.linkedin, icon: "/assets/images/social/likedin.png" },
  { label: "Facebook", href: site.links.facebook, icon: "/assets/images/social/facebook.png" },
  { label: "Email", href: `mailto:${site.email}`, icon: "/assets/images/social/email.png" },
];

export const stats = [
  { value: "1500+", label: "problems solved" },
  { value: "100+", label: "online contests" },
  { value: "7", label: "onsite IUPC / ICPC" },
  { value: "3.42", label: "CGPA / 4.0" },
];

export const profiles = [
  {
    platform: "Codeforces",
    handle: "ReMade",
    url: "https://codeforces.com/profile/ReMade",
    rating: 1368,
    title: "Pupil",
    top: "Top 18%",
    of: "1.6M+ users",
  },
  {
    platform: "LeetCode",
    handle: "Sobhan_Mridha",
    url: "https://leetcode.com/u/Sobhan_Mridha/",
    rating: 1789,
    title: "Top 10%",
    top: "Top 10%",
    of: "1M+ users",
  },
  {
    platform: "CodeChef",
    handle: "sobhan_mridha",
    url: "https://www.codechef.com/users/sobhan_mridha",
    rating: 1603,
    title: "3★ Coder",
    top: "Top 10%",
    of: "1M+ users",
  },
  {
    platform: "AtCoder",
    handle: "ReMaDe",
    url: "https://atcoder.jp/users/ReMaDe",
    rating: 702,
    title: "Brown",
    top: "Top 20%",
    of: "1M+ users",
  },
];

export const contests = [
  {
    year: 2026,
    name: "IUT IUPC 2026",
    detail: "IUT 12th ICT Fest Inter University Programming Contest",
    rank: "82nd",
    team: "TC_Phoenix",
  },
  {
    year: 2026,
    name: "SUST IUPC 2026",
    detail: "SUST CSE Carnival Inter University Programming Contest",
    rank: "111th",
    team: "TC_Phoenix",
  },
  {
    year: 2026,
    name: "DUET IUPC 2026",
    detail: "DUET Inter University Programming Contest",
    rank: "105th",
    team: "TC_Phoenix",
  },
  {
    year: 2025,
    name: "DUET IUPC 2025",
    detail: "DUET Inter University Programming Contest",
    rank: "105th",
    team: "TC_Phoenix",
  },
  {
    year: 2023,
    name: "ICPC Dhaka Regional 2023",
    detail: "ACM ICPC Asia Dhaka Regional",
    rank: "102nd",
    outOf: "223 teams",
    team: "TC_ERROR_PROOF",
    url: "https://icpc.global/ICPCID/EL0R1D6N5VIM",
    featured: true,
  },
  {
    year: 2023,
    name: "BUET IUPC 2023",
    detail: "BUET Inter University Programming Contest",
    rank: "83rd",
    team: "TC_ERROR_PROOF",
  },
  {
    year: 2023,
    name: "NCPC Onsite 2023",
    detail: "National Collegiate Programming Contest, hosted by JU",
    rank: "167th",
    team: "TC_ERROR_PROOF",
  },
];

export const education = [
  {
    degree: "BSc in Computer Science and Engineering",
    school: "National University",
    period: "Jan 2022 – present",
    note: "CGPA 3.42 / 4.00 (through 7th semester)",
  },
];

export const experience = [
  {
    role: "General Secretary",
    org: "Programming Club, Tejgaon College",
    period: "Feb 2025 – Apr 2026",
    text: "Helped members collaborate effectively and get things done. Managed club events and projects.",
  },
  {
    role: "Programming Contest Coordinator",
    org: "Programming Club, Tejgaon College",
    period: "Oct 2023 – Feb 2025",
    text: "Guided students in C, data structures and algorithms, and coordinated coding contests for junior members on virtual judge platforms.",
  },
];

export const projects = [
  {
    name: "Watchlist",
    summary:
      "A full-stack web application to manage and share personalized movie and series watchlists, powered by the TMDb API.",
    points: [
      "Separate Watchlist and Watched pages",
      "Real-time movie and series data via the TMDb API",
      "Shareable lists with a responsive, intuitive UI",
    ],
    tools: ["Flask", "SQL", "HTML", "CSS", "JavaScript", "TMDb API"],
    live: "https://watchlist-tfb8.onrender.com/",
    repo: "https://github.com/SobhanMridha/Watchlist",
  },
  {
    name: "Merge Sort Visualizer",
    summary:
      "A terminal-based tool that demonstrates Merge Sort, letting users watch arrays split and merge step by step.",
    points: [
      "Visual representation of recursive splits and merges",
      "Color-coded ANSI output for clarity",
      "Runs entirely in the terminal with no external dependencies",
    ],
    tools: ["Python", "ANSI colors", "CLI"],
    repo: "https://github.com/SobhanMridha/Merge-Sort-Visualizer",
  },
];

const icon = (n) => `/assets/images/skills/${n}.svg`;

export const skills = [
  {
    title: "Languages",
    items: [
      { name: "C++", icon: icon("c++") },
      { name: "C", icon: icon("c") },
      { name: "Python", icon: icon("python") },
      { name: "JavaScript", icon: icon("javascript") },
      { name: "SQL", icon: icon("mysql") },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: icon("html5") },
      { name: "CSS", icon: icon("css3") },
      { name: "React", icon: icon("react") },
      { name: "Tailwind", icon: icon("tailwind") },
      { name: "Bootstrap", icon: icon("bootstrap") },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: icon("node-dot-js") },
      { name: "Express", icon: icon("express") },
      { name: "Flask", icon: icon("flask") },
      { name: "Django", icon: icon("django") },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", icon: icon("mysql") },
      { name: "MongoDB", icon: icon("mongodb") },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: icon("git") },
      { name: "GitHub", icon: icon("github") },
      { name: "VS Code", icon: icon("visualstudiocode") },
    ],
  },
  {
    title: "Problem solving",
    items: [
      { name: "Data structures" },
      { name: "Algorithms" },
      { name: "Competitive programming" },
    ],
  },
  {
    title: "Human languages",
    items: [{ name: "English" }, { name: "Hindi" }, { name: "Bangla" }],
  },
];
