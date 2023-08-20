
//JSX

const react1 = document.getElementById("root");

let element = <>
 <div className="split">
        <div className="leftSide">
            <div className="top">
                <div className="profile">
                    <h4>PROFILE</h4>
                    <p>Software engineering fresh graduate, 
                        interested in technology and project 
                        management. I want to be part of 
                        the 2030 vision, devoting all efforts I 
                        can to achieve the goals it holds, 
                        using acquired knowledge to
                        contribute heavily toward the 
                        Kingdome's excellence.</p>
                </div>
                <div className="language">
                    <h4>LANGUAGE</h4>
                    <p>ARABIC</p>
                    <p>ENGLISH</p>
                </div>
                <div className="contact">
                    <h4>CONTACT</h4>
                    <p>PHONE: 966509257309</p>
                    <p>EMAIL: engshathaalfqih@gmail.com</p>
                    <p>LINKEDIN: Shatha Alfqih</p>
                    <p>GitHub: Shazmend</p>
                </div>
            </div>
            <div className="down">
                <div className="portfolio">
                    <img src="portfolioQR.PNG" width="130vh"></img>
                    <p>Scan My Portfolio</p>
                </div>
            </div>
        </div>
        <div className="rightSide">
            <div className="title">
                <h1>shatha alzhrani</h1>
                <h2>Front-End Developer</h2>
            </div>
            <div className="content">
                <div className="contentTitle">
                    <div className="subTitle">
                        <h4>EDUCATION</h4>
                    </div>
                    <div className="list">
                        <li>2019 - 2023</li>
                        <li className="coloredList">Bachelor’s degree in software engineer, first-class Honors| University Of Jeddah.</li>
                    </div>
                </div>
                <div className="contentTitle">
                    <div className="subTitle">
                        <h4>TRAINING</h4>
                    </div>
                    <div className="list">
                        <li>2023/ 7 – PRESENT</li>
                        <li className="coloredList">Web development using javascript bootcamp | Twaiq Academy.</li>
                    </div>
                    <div className="list">
                        <li>2022/ 6 – 2022/8</li>
                        <li className="coloredList">Summer Training Program, Internet of Things And Data Systems| Smart 
                            Method Institution.
                            </li>
                    </div>
                </div>
                <div className="contentTitle">
                    <div className="subTitle">
                        <h4>PROJECTS</h4>
                    </div>
                    <div className="list">
                        <li className="bold">SIWAR WORLD GAME – UI/UX , PROGRAMMER</li>
                        <li className="blackList">application aim to enhance the children’s awareness about digital data privacy through 
                            applying the concept of gamification that focus on some aspects of online privacy.</li>
                    </div>
                    <div className="list">
                        <li className="bold">APLUS WEB SITE – PROJECT MANAGER</li>
                        <li className="blackList">Site that targets university students and provides private courses for university subjects.
                        </li>
                    </div>
                </div>
                <div className="contentTitle">
                    <div className="subTitle">
                        <h4>TECHNICAL SKILLS</h4>
                    </div>
                    <div className="moveList">
                        <div className="gridList">
                            <li>UX/UI</li>
                            <li>Project Management</li>
                            <li>Web Development</li>
                            <li>Software Testing</li>
                            <li>Software Modeling</li>
                            <li>JAVA</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Bootstrap</li>
                        </div>
                    </div>
                </div>
                <div className="contentTitle">
                    <div className="subTitle">
                        <h4>SOFT SKILLS</h4>
                    </div>
                    <div className="moveList">
                        <div className="gridList">
                            <li>Leadership</li>
                            <li>Communication</li>
                            <li>Problem Analytic</li>
                            <li>Teamwork Skills</li>
                            <li> Idea Generation</li>
                            <li>Effective Planning </li>
                            <li> Problem Solving </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

</>


ReactDOM.render(element, react1);