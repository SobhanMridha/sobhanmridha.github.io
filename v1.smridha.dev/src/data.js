// Single source of truth for all portfolio content (mirrors the CV).
const profile = {
  name: "Sobhan Mridha",
  email: "sobhanmridha786@gmail.com",
  location: "Dhaka, Bangladesh",
  tagline:
    "CSE student and competitive programmer who enjoys algorithms, data structures and building small, useful web apps.",
  intro:
    "I'm a Computer Science and Engineering student at National University and a competitive programmer with a strong foundation in algorithms, data structures and problem-solving. I compete regularly on Codeforces, LeetCode, CodeChef and AtCoder, and I represent my university in ICPC-style team contests.",
};

const nav = [
  { label: "About me", href: "/about/" },
  { label: "Skills", href: "/skills/" },
  { label: "Projects", href: "/projects/" },
  { label: "Contact", href: "/contact/" },
];

const social = [
  { label: "GitHub", href: "https://github.com/SobhanMridha", icon: "github.png" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sobhanmridha/", icon: "likedin.png" },
  { label: "Facebook", href: "https://www.facebook.com/md.sobhanmridha", icon: "facebook.png" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "email.png" },
];

const education = {
  degree: "BSc in Computer Science and Engineering",
  school: "National University",
  period: "Jan 2022 – Present",
  detail: "CGPA 3.42 / 4.00 (through 7th semester)",
};

// Judges: rating data from the CV.
const judges = [
  { site: "Codeforces", handle: "ReMade", url: "https://codeforces.com/profile/ReMade", rating: 1368, rank: "Pupil", percentile: "Top 18%", users: "1.6M" },
  { site: "LeetCode", handle: "Sobhan_Mridha", url: "https://leetcode.com/u/Sobhan_Mridha/", rating: 1789, rank: "", percentile: "Top 10%", users: "1M" },
  { site: "CodeChef", handle: "sobhan_mridha", url: "https://www.codechef.com/users/sobhan_mridha", rating: 1603, rank: "3★ Coder", percentile: "Top 10%", users: "1M" },
  { site: "AtCoder", handle: "ReMaDe", url: "https://atcoder.jp/users/ReMaDe", rating: 702, rank: "Brown", percentile: "Top 20%", users: "1M" },
];
const stats = [
  { value: "1500+", label: "problems solved" },
  { value: "100+", label: "online contests" },
  { value: "1789", label: "peak LeetCode rating" },
  { value: "7", label: "ICPC-style team contests" },
];

const contests = [
  { event: "ICPC Dhaka Regional 2023", rank: "102nd", of: "223 teams", team: "TC_ERROR_PROOF", url: "https://bapsoj.org/contests/icpc-dhaka-regional-site-2023/standings" },
  { event: "BUET Inter University Programming Contest 2023", rank: "83rd", team: "TC_ERROR_PROOF", url: "https://toph.co/c/buet-inter-university-2023/standings" },
  { event: "NCPC Onsite 2023 (hosted by JU)", rank: "167th", team: "TC_ERROR_PROOF", url: "https://bapsoj.org/contests/ncpc-onsite-2023-hosted-by-ju/standings" },
  { event: "DUET Inter University Programming Contest 2025", rank: "105th", team: "TC_Phoenix", url: "https://toph.co/c/duet-inter-university-iupc-2025/standings" },
  { event: "DUET Inter University Programming Contest 2026", rank: "105th", team: "TC_Phoenix", url: "https://toph.co/c/duet-inter-university-2026/standings" },
  { event: "SUST CSE Carnival Inter University Programming Contest 2026", rank: "111th", team: "TC_Phoenix", url: "https://toph.co/c/sust-inter-university-2026/standings" },
  { event: "IUT 12th ICT Fest Inter University Programming Contest 2026", rank: "82nd", team: "TC_Phoenix", url: "https://toph.co/c/iut-inter-university-2026/standings" },
];

const experience = [
  {
    role: "General Secretary",
    org: "Programming Club, Tejgaon College",
    period: "Feb 2025 – Apr 2026",
    text: "Helped members collaborate effectively and get things done; managed club events and projects.",
  },
  {
    role: "Programming Contest Coordinator",
    org: "Programming Club, Tejgaon College",
    period: "Oct 2023 – Feb 2025",
    text: "Guided students in C, data structures and algorithms, and coordinated coding contests for junior members on virtual judge platforms.",
  },
];

const skills = [
  { title: "Programming languages", items: [["C", "c.svg"], ["C++", "c++.svg"], ["Python", "python.svg"], ["JavaScript", "javascript.svg"], ["SQL"]] },
  { title: "Core computer science", items: [["Data structures"], ["Algorithms"], ["Problem solving"]] },
  { title: "Web frontend", items: [["HTML", "html5.svg"], ["CSS", "css3.svg"], ["React", "react.svg"], ["Tailwind", "tailwind.svg"], ["Bootstrap", "bootstrap.svg"]] },
  { title: "Web backend", items: [["Node", "node-dot-js.svg"], ["Express", "express.svg"], ["Flask", "flask.svg"], ["Django", "django.svg"]] },
  { title: "Databases", items: [["MySQL", "mysql.svg"], ["MongoDB", "mongodb.svg"]] },
  { title: "Tools", items: [["Git", "git.svg"], ["GitHub", "github.svg"], ["VS Code", "visualstudiocode.svg"]] },
  { title: "Human languages", items: [["English"], ["Hindi"], ["Bangla"]] },
];

const projects = [
  {
    name: "Watchlist",
    summary:
      "A full-stack web application for managing and sharing personalized movie and series watchlists, powered by the TMDb API.",
    tech: ["Flask", "SQL", "HTML", "CSS", "JavaScript", "TMDb API"],
    points: [
      "Separate Watchlist and Watched pages for each user.",
      "Live movie and series data pulled from the TMDb API.",
      "Shareable lists and a responsive UI.",
    ],
    links: [
      { label: "Live demo", url: "https://watchlist-tfb8.onrender.com/" },
      { label: "GitHub repo", url: "https://github.com/SobhanMridha/Watchlist" },
    ],
  },
  {
    name: "Merge Sort Visualizer",
    summary:
      "A terminal-based tool that shows how Merge Sort works, letting users watch arrays split and merge step by step.",
    tech: ["Python"],
    points: [
      "Visualizes each recursive split and merge.",
      "Color-coded ANSI output for clarity.",
      "Runs entirely in the terminal with no external dependencies.",
    ],
    links: [{ label: "GitHub repo", url: "https://github.com/SobhanMridha/Merge-Sort-Visualizer" }],
  },
];

const contactLinks = [
  { label: "Email", text: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", text: "linkedin.com/in/sobhanmridha", href: "https://www.linkedin.com/in/sobhanmridha/" },
  { label: "GitHub", text: "github.com/SobhanMridha", href: "https://github.com/SobhanMridha" },
  { label: "Codeforces", text: "codeforces.com/profile/ReMade", href: "https://codeforces.com/profile/ReMade" },
  { label: "Facebook", text: "facebook.com/md.sobhanmridha", href: "https://www.facebook.com/md.sobhanmridha" },
];

module.exports = { profile, nav, social, education, judges, stats, contests, experience, skills, projects, contactLinks };
