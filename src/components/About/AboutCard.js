import React from "react";
import Card from "react-bootstrap/Card";
import {ImCircleRight} from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Pratyush Chowdhury </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am currently an Intern at iAM-KiAM, Pune.
            <br />
            I'm in my Fourth Year of pursuing B.Tech in <span className="purple">CSE</span> with <span className="purple">specialization in Cybersecurity & Forensics  </span> from <span className="purple">MIT-WPU, Pune.</span>
            <br />
            <br />
            Apart from coding, here are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImCircleRight/> E-Sports 🎮
            </li>
            <li className="about-activity">
              <ImCircleRight/> Badminton 🏸
            </li>
            <li className="about-activity">
              <ImCircleRight/> Sketching ✍️
            </li>
            <li className="about-activity">
              <ImCircleRight/> Playing Keyboard 🎹 & Guitar 🎸
            </li>
            <li className="about-activity">
              <ImCircleRight/> Travelling ✈🧳
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
           "In the middle of every difficulty lies opportunity."{" "}
          </p>
          <footer className="blockquote-footer">Albert Einstein</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
