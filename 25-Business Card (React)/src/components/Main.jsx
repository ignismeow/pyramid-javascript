import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import dpImage from "../assets/dp.png";

export default function Main() {
  return (
    <main className="main-content">
      <img className="main-image" src={dpImage} alt="logo" />
      <div className="text">
        <div className="name">
          <h1>Smith hamer</h1>
          <p>Frontend Developer</p>
          <p className="website">smithamer.website</p>
        </div>
        <div className="buttons">
          <button className="email"><MdEmail />Email</button>
          <button className="linkedin"><IoLogoLinkedin />Linkedin</button>
        </div>
        <div className="details">
          <div className="about">
            <h2>About</h2>
            <p>
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </p>
          </div>
          <div className="interests">
            <h2>Interests</h2>
            <p>
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
          </div>
        </div>
          <div className="icons">
            <FaSquareXTwitter />
            <FaFacebookSquare />
            <FaSquareInstagram />
            <FaSquareGithub />
          </div>
      </div>
    </main>
  );
}
