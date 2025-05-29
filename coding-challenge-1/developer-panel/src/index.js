import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  const style = { width: "342px", height: "295px" };

  return (
    <img
      className="avatar"
      style={style}
      src="/me.JPEG"
      alt="Baddie with a PHATTY"
    ></img>
  );
}

function Intro() {
  return (
    <div>
      <h1>Natalie Falcon</h1>
      <p>
        Aspiring full-stack web developer. Currently been unemployed for four
        months. It will all be worth it in the end. Right?
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {/* {    <Skill name="HTML" emoji="👾" bg="#2e559e" />
      <Skill name="CSS" emoji="🎨" bg="#0a7a0e" />
      <Skill name="JavaScript" emoji="🧠" bg="#a81d3b" />
      <Skill name="React" emoji="⚛" bg="#3bb8b6" />} */}

      {skills.map((skill) => (
        <Skill skill={skill} />
      ))}
    </div>
  );
}

function Skill({ skill }) {
  let emoji = "";

  switch (skill.level) {
    case "beginner":
      emoji = "🎨";
      break;

    case "intermediate":
      emoji = "👾";
      break;

    case "advanced":
      emoji = "🧠";
      break;

    default:
      emoji = "";
      break;
  }
  return (
    <span className="skill" style={{ backgroundColor: skill.color }}>
      {skill.skill} {emoji}
    </span>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
