"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false)
  
  const toggleMobileMenu = () =>{
    setMenuOpen(!menuOpen);
  }
  return (
    <>
        <header>
        <a href="#" className="logo-holder">
          <div className="logo">I</div>
          <div className="logo-text">IgnisMeow</div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Skill</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="mailto:saadbeenco@gmail.com" className="button">Contact</a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <section className="hero-container">
          <div className="hero-blue">
            <h1>
              <small>Hi I'm</small>
              Ignis Meow
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
              consequatur sint minima at ipsa quasi ab, minus praesentium officia
              molestiae rerum animi deleniti nihil.
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                ex voluptatem vel ducimus. Asperiores, necessitatibus.
              </span>
            </p>
            <div className="call-to-action">
              <a href="#" className="button black">View Resume</a>
              <a href="mailto:saadbeenco@gmail.com" className="button white">Contact Me</a>
            </div>
            <div className="social-links">
              <a href="#">
                <img src="./imgs/github.png" alt="Github" width="48" />
              </a>
              <a href="#">
                <img src="./imgs/linkedin.png" alt="Lindkedin" width="48" />
              </a>
            </div>
          </div>
          <div className="hero-yellow">
            <img src="./imgs/hero-image.png" alt="IgnisMeow" width="100%" />
          </div>
        </section>
        <section className="logos container">
          <div className="marquee">
            <div className="track">
              <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/javascript.png" alt="JAVASCRIPT" width="128" />
              <img src="./imgs/python.png" alt="PYTHON" width="128" />
              <img src="./imgs/react.png" alt="REACT" width="128" />
              <img src="./imgs/nextjs.png" alt="NEXTJS" width="128" />
              <img src="./imgs/azure.png" alt="AZURE" width="128" />
              <img src="./imgs/sass.png" alt="SASS" width="128" />
              <img src="./imgs/vscode.png" alt="VSCODE" width="128" />
              <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/javascript.png" alt="JAVASCRIPT" width="128" />
              <img src="./imgs/python.png" alt="PYTHON" width="128" />
              <img src="./imgs/react.png" alt="REACT" width="128" />
              <img src="./imgs/nextjs.png" alt="NEXTJS" width="128" />
              <img src="./imgs/azure.png" alt="AZURE" width="128" />
              <img src="./imgs/sass.png" alt="SASS" width="128" />
              <img src="./imgs/vscode.png" alt="VSCODE" width="128" />
            </div>
          </div>
        </section>
        <section id="skills" className="skills container">
          <h2>
            <small>About Me</small>
            Skills
          </h2>
          <div className="holder-blue">
            <div className="left-column">
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>javascript</li>
              </ul>
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Python</li>
              </ul>
            </div>
            <div className="right-column">
              <h3>A bit about me</h3>
              <p>
                Hi I'm Ignis meow Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Cum a velit excepturi, autem illo assumenda
                incidunt dolores officia, commodi esse harum nisi qui totam!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                temporibus accusantium commodi illum molestias, repellendus
                quisquam maxime. Ea voluptatem nulla aliquam tenetur officia
                possimus minima quod ipsum, eos id rerum quasi temporibus,
                cupiditate dolorum, ipsam nesciunt qui veniam. Consequuntur,
                nostrum.
              </p>
            </div>
          </div>
        </section>
        <section className="work-experience container">
          <h2>
              <small>Recent</small>
              Work Experience
          </h2>
          <div className="jobs">
              <article>
                  <figure>
                      <div><img src="./imgs/workplace-1.jpg" alt="workplace-1" width="100%"/>
                          <figcaption>
                              workplace-1
                          </figcaption>
                      </div>
                  </figure>
                  <h3>Workplace -1</h3>
                  <div>2000-2020</div>
                  <p>This is example description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem nostrum pariatur exercitationem porro tempore!</p>

              </article>
              <article>
                  <figure>
                      <div><img src="./imgs/workplace-2.jpg" alt="workplace-2" width="100%"/>
                          <figcaption>
                              workplace-2
                          </figcaption>
                      </div>
                  </figure>
                  <h3>Workplace -2</h3>
                  <div>2020-2022</div>
                  <p>This is example description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem nostrum pariatur exercitationem porro tempore!</p>

              </article>
              <article>
                  <figure>
                      <div><img src="./imgs/workplace-3.jpg" alt="workplace-3" width="100%"/>
                          <figcaption>
                              workplace-3
                          </figcaption>
                      </div>
                  </figure>
                  <h3>Workplace -3</h3>
                  <div>2022-current</div>
                  <p>This is example description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem nostrum pariatur exercitationem porro tempore!</p>

              </article>
          </div>
        </section>
        <section id="projects" className="bento container">
          <h2>
              <small>Previous</small>
              Completed Projects            
          </h2>
          <div className="bento-grid">
              <a href="#" className="bento-item"><img src="./imgs/bento-1.jpg" alt="workplace-1" width="100%"/></a>
              <a href="#" className="bento-item"><img src="./imgs/bento-2.jpg" alt="workplace-1" width="100%"/></a>
              <a href="#" className="bento-item"><img src="./imgs/bento-3.jpg" alt="workplace-1" width="100%"/></a>
              <a href="#" className="bento-item"><img src="./imgs/bento-4.jpg" alt="workplace-1" width="100%"/></a>
              <a href="#" className="bento-item"><img src="./imgs/bento-5.jpg" alt="workplace-1" width="100%"/></a>
          </div>
        </section>
        <section className="chatbot container">
          <h2>
              <small>Talk to me</small>
              Chatbot
          </h2>
          <div className="chatbot-blue">
              <div className="chat-info">
                  <h3></h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorum iure corporis beatae, fugit amet sint obcaecati recusandae nesciunt ullam eaque esse, debitis reiciendis asperiores.</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero similique, nam culpa id qui nostrum commodi illum? Atque veniam cumque recusandae odit eveniet incidunt?</p>
                  <a href="#" className="button black">Download Resume</a>
              </div>
              <div className="chat-box">
                  <div className="scroll-area">
                      <ul id="chat-log">
                          <li>
                              <span className="avatar bot">AI</span>
                              <div className="message">Generic AI Message</div>
                          </li>
                          <li>
                              <span className="avatar bot">User</span>
                              <div className="message">Generic AI Message</div>
                          </li>
                      </ul>
                  </div>
                  <div className="chat-message">
                      <input type="text" placeholder="Hi! Write your message here"/>
                      <button className="button black">Send</button>
                  </div>
              </div>
          </div>
        </section>
      </main>
    </>
  );
}
