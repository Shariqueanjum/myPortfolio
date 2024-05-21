import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Shariqueanjum/Camp-backend" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://camp-backend-75rv.onrender.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Camping Grounds</h3>
              <p> 
              Created a fully responsive web application for reviewing campgrounds, Where  Users can create, edit, and remove campgrounds. User profiles include more information on the user, their campgrounds, and options to edit or delete their account. They can sort campgrounds by highest rating, most reviewed, lowest price, or highest price. Integrated map for the exact location of Campgrounds.         
              </p>
            </div>
            <footer> <ul className="tech-list"> <li>Node.Js</li> <li>MongoDb</li> <li>Cloudinary</li> <li>EJS</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Shariqueanjum/movies-world" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://movies-world-lemon.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>MoviesWorld: AI-Powered Assistance to enhance search results</h3>
              <p>
              Developed a fully responsive React-based web app with Redux for streamlined state management and React Router for
              smooth navigation. Authenticated users securely using Firebase. Integrated GPT Turbo 3.5 Chat API to elevate user engagement. This intelligent chat completion API enhances search results dynamically.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Redux</li>
                <li>Firebsae</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Shariqueanjum/url_summarizer" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://url-summarizer-nu.vercel.app/" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Url Summarizer</h3>
              <p>
               Developed a fully responsive React application powered by the Rapid-AI API, capable of summarizing the content of any URL. Built with Vite, the app boasts enhanced speed and performance, ensuring a swift and efficient user experience
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>TailwindCss</li>
                <li>RapidAi</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/Shariqueanjum/Gym_Guide" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://gym-guide-ten.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>GymGuide: A Web App to Simplify Your Exercise Routine</h3>
              <p>
              Developed a fully responsive React-based web app for gym tutorials, allowing users to search for specific exercises and view high-quality GIFs of each exercise. Users can also explore similar exercises targeting the same muscles and using similar equipment. Additionally, integrated YouTube videos provide further guidance for each exercise
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Redux</li>
                <li>MUI</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Shariqueanjum/DataVisual" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Data Visualizer: A Comprehensive Tool for Admin Data Tracking</h3>
              <p>
              Developed a responsive Full Stack Data Visualizer web app where admins can visualize data through charts and graphs. Leveraging React and Chart.js for the front end, the app ensures dynamic and interactive visualizations. On the server side, it utilizes MongoDB for data storage and Node.js for runtime, providing robust performance and scalability
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React & Redux</li>
                <li>chart.js</li>
                <li>Node.js</li>
                <li>mongoDb</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


      </div>
    </Container>
  );
}