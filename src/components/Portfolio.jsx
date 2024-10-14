import React from 'react';
import ThemeToggle from './ThemeToggle';
import './portfolio.css'

const Portfolio = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-5">
          <header className="w-full flex justify-between items-center p-6">
            <div className="text-xl font-bold">Chandrasekhar Kuruva</div>
            <nav className="space-x-6 section-list">
              <a href="#home" className="text-gray-800 dark:text-gray-200 hover:text-yellow-600 cursor-pointer">Home</a>
              <a href="#about" className="text-gray-800 dark:text-gray-200 hover:text-yellow-600 cursor-pointer">About</a>
              <a href="#resume" className="text-gray-800 dark:text-gray-200 hover:text-yellow-600 cursor-pointer">Resume</a>
              <a href="#skills" className="text-gray-800 dark:text-gray-200 hover:text-yellow-600 cursor-pointer">Skills</a>
              <a href="#project" className="text-gray-800 dark:text-gray-200 hover:text-yellow-600 cursor-pointer">Projects</a>
              <a href="#contact" className="text-gray-800 dark:text-gray-200 hover:text-yellow-600 cursor-pointer">Contact</a>
              <ThemeToggle />
            </nav>
          </header>
          <main className="flex flex-col items-center mt-12">
            <div className="flex items-center space-x-6">
              <div className="flex flex-col items-start">
                <div className="bg-teal-200 text-teal-800 px-4 py-2 rounded-full text-lg font-semibold">Hello!</div>
                <h1 className="text-5xl font-bold mt-4">
                  I'm <span className="text-gray-800 dark:text-gray-200 underline">Chandrasekhar</span> <span role="img" aria-label="waving hand">👋</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">Full-Stack Developer, Front-End Developer & Thinker. Based in India.</p>
                <div className="flex space-x-4 mt-6">
                  <div className="flex">
                    <a target="_main" href="https://drive.google.com/file/d/1VAlnsaf01FV7Sn4KExaPt-3t-s70gLdq/view?usp=sharing">
                      <button className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg cv">Download CV</button>
                    </a>
                  </div>
                  <div className="flex">
                    <a target="_blank" href="https://www.linkedin.com/in/chandrasekharkuruva/">
                      <button className="bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg connect">Get in Touch!</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="background-img">
                <img src="https://res.cloudinary.com/ddvqjo4f2/image/upload/v1728889335/WhatsApp_Image_2024-03-17_at_14.33.00_24e2631e-removebg-preview_biafax.png" alt="Profile of chandu" className="profile-img rounded-full shadow-lg" />
              </div>
              </div>
              </main>
            
            <br/>
            <br/>
            <br/>
            <br/>
            <hr/>

    
         

          <section className="about text-white flex md:p-12 py-12 px-8" id="about">
            
            <div className="about-description duration-800">
              <h1 className="mb-10"><span className="about-name-2"> ABOUT </span>ME</h1>
              <p className="text-white">
                <span className="text-m md:text-2xl">Hello I'm </span><span className="text-300 text-2xl md:text-2xl text-bold about-name">Chandrasekhar Kuruva</span>
              </p><br />
              <p>
                As a dedicated full-stack developer with a bachelor's degree in <span className="about-name"> B.Com </span>(<span className="about-name">Computer Application</span>),
                I specialize in HTML, CSS, and JavaScript, with a growing proficiency in modern frameworks and
                libraries like ReactJS, as well as back-end technologies like Node.js. I'm eager to apply my
                skills in a professional environment and contribute to impactful web experiences.
                Excited to start my journey in web development, I'm actively seeking growth
                opportunities to make a meaningful impact.
              </p>
            </div>
          </section>
          
          
          <hr />
    
          <section className="skills-section" id="skills">
            <div className="skills-description px-6 duration-700">
              <h1 className="mb-10 text-green-500 duration-900"><span className="skill-name"> MY </span>SKILLS</h1>
              <p>
                I am an enthusiastic Full-Stack Developer committed to crafting user-centered web applications.
                My expertise spans front-end technologies, including <span className="text-green-300">HTML</span>, <span className="text-green-300">CSS</span>, and <span className="text-green-300">JavaScript</span> frameworks such as <span className="text-green-300">ReactJs</span>,
                as well as back-end technologies like <span className="text-green-300">PYTHON</span> and <span className="text-green-300">NodeJs</span>, databases such as <span className="text-green-300">SQLite</span>, and version control tools
                such as <span className="text-green-300">Git</span> and <span className="text-green-300">GitHub</span>. My capabilities encompass the design, development, and deployment of resilient and scalable web applications.
                I am keen to make meaningful contributions within a collaborative team environment and remain dedicated to continual learning
                and professional growth as a developer.
              </p>
              <br/>
              <br/>
              <hr/>
              <div className="flex p-5" id="resume">
                <a target="_main" href="https://drive.google.com/file/d/1VAlnsaf01FV7Sn4KExaPt-3t-s70gLdq/view?usp=sharing">
                  <button type="button" className="button-resume"><span className="skill-name"> My </span>Resume</button>
                </a>
              </div>
            </div>

            <div className="skills-container duration-900">
              <div className="skill">
                <div className="flex justify-between mb-2 text-sm md:text-1xl"><span>HTML</span><span>95%</span></div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="skill">
                <div className="flex justify-between mb-2 text-sm md:text-1xl"><span>CSS</span><span>90%</span></div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill">
                <div className="flex justify-between mb-2 text-sm md:text-1xl"><span>JAVASCRIPT</span><span>80%</span></div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill">
                <div className="flex justify-between mb-2 text-sm md:text-1xl"><span>SQL</span><span>98%</span></div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '98%' }}></div>
                </div>
              </div>
              <div className="skill">
                <div className="flex justify-between mb-2 text-sm md:text-1xl"><span>REACTJS</span><span>75%</span></div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="skill">
                <div className="flex justify-between mb-2 text-sm md:text-1xl"><span>NODEJS</span><span>75%</span></div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="skill">
                <div className="flex justify-between mb-2 text-sm md:text-1xl"><span>PYTHON</span><span>70%</span></div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </section>
    
          <hr />
    
          <section id="project" className="projects-container">
            <div className="projects-heading-container">
              <h1 className="projects-heading">PROJECTS</h1>
              </div>
              </section>
            <ul className="projects-list">
              <li className="project-card">
                <img className="project-img" src="https://res.cloudinary.com/ddvqjo4f2/image/upload/v1726468834/NETFLEX-IMG_qiceew.png" alt="Netflix Clone" />
                <div className="card-container">
                  <h4 className="project-name">Netflix Clone</h4>
                  <ul className="tech-list">
                    <li className="tech">HTML</li>
                    <li className="tech">CSS</li>
                  </ul>
                  <div className="project-btns-container">
                    <a target="_main" href="https://netflix-clone-okf4vmrmh-chandrasekhar-kuruvas-projects.vercel.app/" className="project-link">
                      <button className="visit">Visit</button>
                    </a>
                    <a target="_main" href="https://github.com/chandrasekhar2145/Netflix-Clone.git" className="project-link">
                      <button className="code">Code</button>
                    </a>
                  </div>
                </div>
              </li>
              <li className="project-card">
                <img className="project-img" src="https://res.cloudinary.com/dkm6rcqj9/image/upload/v1724747881/ugj8ip3cqnji63zgncbc.png" alt="Youtube Clone" />
                <div className="card-container">
                  <h4 className="project-name">Youtube Clone</h4>
                  <ul className="tech-list">
                    <li className="tech">React.js</li>
                  </ul>
                  <div className="project-btns-container">
                    <a target="_main" href="https://chandunxtwatch8.ccbp.tech/login" className="project-link">
                      <button className="visit">Visit</button>
                    </a>
                    <a target="_main" href="https://github.com/chandrasekhar2145/Nxt-Watch.git" className="project-link">
                      <button className="code">Code</button>
                    </a>
                  </div>
                </div>
              </li>
              <li className="project-card">
                <img className="project-img" src="https://res.cloudinary.com/ddvqjo4f2/image/upload/v1726469220/Covid_igaf8u.png" alt="Covid19India Clone" />
                <div className="card-container">
                  <h4 className="project-name">Covid Dashboard</h4>
                  <ul className="tech-list">
                    <li className="tech">React.js</li>
                  </ul>
                  <div className="project-btns-container">
                    <a target="_main" href="https://kchanducovid19.ccbp.tech/" className="project-link">
                      <button className="visit">Visit</button>
                    </a>
                    <a target="_main" href="https://github.com/chandrasekhar2145/Covid19-Dashboard.git" className="project-link">
                      <button className="code">Code</button>
                    </a>
                  </div>
                </div>
              </li>
              <li className="project-card">
                <img className="project-img" src="https://res.cloudinary.com/dkm6rcqj9/image/upload/v1724747867/irparev8uobrsvocpqbr.png" alt="Ecommerce Website" />
                <div className="card-container">
                  <h4 className="project-name">Ecommerce Website</h4>
                  <ul className="tech-list">
                    <li className="tech">React.js</li>
                  </ul>
                  <div className="project-btns-container">
                    <a target="_main" href="https://chandunxttrend8.ccbp.tech/login" className="project-link">
                      <button className="visit">Visit</button>
                    </a>
                    <a target="_main" href="https://github.com/chandrasekhar2145/Nxt-Trendz.git" className="project-link">
                      <button className="code">Code</button>
                    </a>
                  </div>
                </div>
              </li>
              <li className="project-card">
                <img className="project-img" src="https://res.cloudinary.com/dkm6rcqj9/image/upload/v1724747860/bmg0sau2luruvzlgn8zi.png" alt="Food Munch" />
                <div className="card-container">
                  <h4 className="project-name">Food Munch</h4>
                  <ul className="tech-list">
                    <li className="tech">Html</li>
                    <li className="tech">Css</li>
                    <li className="tech">Bootstrap</li>
                  </ul>
                  <div className="project-btns-container">
                    <a target="_main" href="https://chandufoodmenu.ccbp.tech/" className="project-link">
                      <button className="visit">Visit</button>
                    </a>
                    <a target="_main" href="https://github.com/chandrasekhar2145/Food-Much.git" className="project-link">
                      <button className="code">Code</button>
                    </a>
                  </div>
                </div>
              </li>
              <li className="project-card">
                <img className="project-img" src="https://res.cloudinary.com/dkm6rcqj9/image/upload/v1724747851/yfozhrv99ssnhni2lsgq.png" alt="Todo-list" />
                <div className="card-container">
                  <h4 className="project-name">Todo-list</h4>
                  <ul className="tech-list">
                    <li className="tech">HTML</li>
                    <li className="tech">CSS</li>
                    <li className="tech">JavaScript</li>
                  </ul>
                  <div className="project-btns-container">
                    <a target="_main" href="https://chandutodo11.ccbp.tech/" className="project-link">
                      <button className="visit">Visit</button>
                    </a>
                    <a target="_main" href="https://github.com/chandrasekhar2145/Todo-List.git" className="project-link">
                      <button className="code">Code</button>
                    </a>
                  </div>
                </div>
              </li>
              <li className="project-card">
                <img className="project-img" src="https://res.cloudinary.com/ddvqjo4f2/image/upload/v1726479048/data_analytics_a5ipyd.png" alt="Calculator" />
                <div className="card-container">
                  <h4 className="project-name">Data Analytics Dashboard</h4>
                  <ul className="tech-list">
                    <li className="tech">Power BI</li>
                    <li className="tech">Kaggle</li>
                    <li className="tech">MS Excel</li>
                  </ul>
                  <div className="project-btns-container">
                    <a target="_main" href="https://drive.google.com/file/d/1DlxkN6AuVezQFuD2-nd8Ta0i_pP71DSa/view?usp=sharing" className="project-link">
                      <button className="visit">Visit</button>
                    </a>
                  </div>
                </div>
              </li>
              <li className="project-card">
                <img className="project-img" src="https://res.cloudinary.com/ddvqjo4f2/image/upload/v1726482437/Ethical_Hacking_2_hrchee.jpg" alt="Calculator" />
                <div className="card-container">
                  <h4 className="project-name">Investigating Phishing Email</h4>
                  <ul className="tech-list">
                    <li className="tech">Maltego</li>
                  </ul>
                  <div className="project-btns-container">
                    <a target="_main" href="https://drive.google.com/file/d/1lclZnfc21SBgfaCfRGwEwZjlu_aAwoVy/view" className="project-link">
                      <button className="visit">Visit</button>
                    </a>
                    </div>
                    </div>
                </li>
            </ul>
        <br/>
        
        <br/>
        <hr/>
             
    <section class="section-contact mb-12 md:px-12 px-8" id="contact">
        <div class="container mb-0">
            <div class="text-center mb-0">
                <h1 class="mb-1 text-500 text-1xl font-bold md:text-2xl mt-0  contact"> <span class="contact-name"> CONTACT </span>ME</h1>
            </div>
            <div class="content">
                <div class="col-1">
                    <div class="address-line">
                        <div class="contact-info">
                            <div class="flex  address-div">
                                <i class="fa-solid fa-user text-1xl mr-2"></i>
                                <h4 class="contact-info-title contact">NAME</h4>
                            </div>
                            <div>Chandrasekhar Kuruva</div>
                        </div>
                    </div>
                    <div class="address-line">
                        <div class="contact-info">
                            <div class="flex  address-div">
                                <i class="fa-solid fa-location-dot text-1xl mr-2"></i>
                                <h4 class="contact-info-title contact">ADDRESS</h4>
                            </div>
                            <div>Andhra Pradesh, India</div>
                        </div>
                    </div>
                    <div class="address-line">

                        <div class="contact-info">
                            <div class="flex  address-div">
                                <i class="fa-solid fa-envelope  text-1xl mr-2"></i>
                                <h4 class="contact-info-title contact">EMAIL</h4>
                            </div>
                            <div>kuruvachandrasekhar05@gmail.com</div>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <form>
                        <div class="form-container">
                            <h2 class="mb-10 text-xl text-gray-400">Send Message</h2>
                            <div class="form-row">
                                <label>Name</label>
                                <div>
                                    <input type="text" class="form-field"/>
                                </div>
                            </div>
                            <div class="form-row">
                                <label>Email</label>
                                <div>
                                    <input type="text" class="form-field"/>
                                </div>
                            </div>
                            <div class="form-row">
                                <label>Write your message...</label>
                                <div>
                                    <input type="text" class="form-field"/>
                                </div>
                            </div>
                            <input type="button" class="send-btn" value="Send"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <hr/>
    
    <footer>
        <h1 class="text-500 font-bold text-1xl md:text-2xl mb-8 connect"><span class="connect-name"> CONNECT </span> WITH ME 🤝</h1>
        <div id="media" class="text-2xl md:text-3xl">
            <a href="https://www.instagram.com/urs_chandu_14/" target="_blank">
                <i class="fa-brands fa-instagram insta mr-10"></i>
            </a>
            <a href="https://x.com/chandukuruvaa" target="_blank">
                <i class="fa-brands fa-twitter twitter mr-10"></i>
            </a>
            <a href="https://www.linkedin.com/in/chandrasekharkuruva/" target="_blank">
                <i class="fa-brands fa-linkedin linkedin mr-10"></i>
            </a>
            <a href="https://github.com/chandrasekhar2145" target="_blank">
                <i class="fa-brands fa-github git"></i>
            </a>

        </div>

        <div>
            <h1 class="art"><span class="art-name">Created </span> By Chandu 💙</h1>
        </div>
    </footer>

        </div>
          
            
)}

export default Portfolio;