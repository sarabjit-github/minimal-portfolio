import Image from "next/image";
import Layout from "../components/Layout";
import * as utilStyles from "../styles/utils.module.css";
import * as homeStyles from "../styles/home.module.css";
import coffeeProjectImg from "../public/images/coffee-project.png";
import hostingerProjectImg from "../public/images/hostinger-project.png";
import weatherProjectImg from "../public/images/weather-project.png";
import portfolioProjectImg from "../public/images/portfolio-project.png";
import emptyPimg from "../public/images/empty-pimg.png";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Coffee Shop App",
      techs: "React, Redux Toolkit, Scss, Framer motion (Animation library)",
      github: "https://github.com/sarabjit-github/coffee-shop",
      live: "https://coffee-shop-beta.vercel.app/",
      projectImg: coffeeProjectImg,
    },
    {
      id: 2,
      title: "Microsoft Todo Clone App",
      techs: "React, Context Api, Scss",
      github: "https://github.com/sarabjit-github/nano-todo",
      live: "https://nano-todo.netlify.app/",
      projectImg: undefined,
    },
    {
      id: 3,
      title: "Amazing Portfolio",
      techs: "React, Fiebase (Database), Scss",
      github: undefined,
      live: "https://sarabjitsingh.live/",
      projectImg: portfolioProjectImg,
    },
    {
      id: 4,
      title: "Google Weather Clone",
      techs: "React, Fiebase (Database), Scss",
      github: "https://github.com/sarabjit-github/weather-app",
      live: "https://google-weather.netlify.app/",
      projectImg: weatherProjectImg,
    },
    {
      id: 5,
      title: "Hostinger Redesign",
      techs: "React, Figma, Framer Motion(Animation library), Scss",
      github: "https://github.com/sarabjit-github/hostinger-redesign",
      live: "https://hostinger-new.vercel.app/",
      projectImg: hostingerProjectImg,
    },
  ];
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I’m Sarbjit Singh. I’m a Frontend Developer. You can contact
          me here:{" "}
          <a className={homeStyles.email} href="mailto:websachin111@gmail.com" target="_blank" rel="noreferrer">websachin111@gmail.com</a>
        </p>
        {/* <p>This is my skills:</p> */}
        <h1 className={utilStyles.headingXl}>Skills</h1>
        <ul className={homeStyles.skills}>
          <li>HTML</li>
          <li>CSS</li>
          <li>SCSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
          <li>
            NextJs <span>(Basic + Intermediate and continue learning)</span>
          </li>
          <li>
            NodeJs <span>(Basic and continue learning)</span>
          </li>
          <li>
            ExpressJs <span>(Basic and continue learning)</span>
          </li>
          <li>Git & Github</li>
          <li>Figma</li>
        </ul>
      </section>
      <section>
        <h1 className={utilStyles.headingXl}>Projects</h1>
        {projects.map(({ id, title, techs, github, live, projectImg }) => {
          return (
            <div className={homeStyles.project} key={id}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "8px",
                  border: "1px solid #dfdfdf",
                  backgroundColor: "#cfcfcf",
                }}
              >
                <Image
                  src={projectImg || emptyPimg}
                  width={240}
                  height={150}
                  alt="project img"
                />
              </div>
              <div>
                <h3>{title}</h3>
                <p>
                  <span>Tech using:</span> {techs}
                </p>
                <div className={homeStyles.links}>
                  {github ? (
                    <a href={github} target="_blank" rel="noreferrer">
                      Github
                    </a>
                  ) : (
                    <a>Deleted</a>
                  )}
                  <a href={live} target="_blank" rel="noreferrer">
                    Live
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </Layout>
  );
}
