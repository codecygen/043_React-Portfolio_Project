import React, { useContext } from "react";

import myImage from "../../assets/images/Me.jpeg";
import Divider from "../ui/Divider";

import SocialMedia from "../ui/SocialMedia";
import Button from "../ui/buttons/Button";

import { FaCanadianMapleLeaf } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import { ImPen } from "react-icons/im";

import classes from "./Home.module.css";

import DarkModeContext from "../../store/color-context";

const Home = () => {
  const darkCtx = useContext(DarkModeContext);

  const buttonColor = darkCtx.isDarkMode
    ? "button-color-dark"
    : "button-color-light";

  return (
    <header className={classes.home} id="home">
      <div className={classes["same-line"]}>
        <div className={classes["img-div"]}>
          <img src={myImage} alt="profile" />
        </div>

        <div>
          <h1>Vahit S.</h1>
          <h3>Full Stack Web Developer</h3>
          <h4 className={classes["same-line"]}>
            Based in Toronto
            <FaCanadianMapleLeaf className="maple-icon" />
          </h4>
          <p>
            I am a software and mechanical engineer. I create web apps for more
            than 3 years.
          </p>
          <div className={classes["link-container"]}>
            <Button className={buttonColor} padding="true">
              <a href="https://drive.google.com/file/d/1sNUvXlUuPn57Uh9BSGVPmK3Tb3bHftpK/view?usp=sharing">
                Resume
              </a>
            </Button>

            <Button className={buttonColor} padding="true" margin="true">
              <a
                href="https://vercel-083-next-js-blog-website.vercel.app/"
                className="blog-button"
              >
                <div>
                  <ImPen className="pen-icon" size={30} />
                </div>
                <div>Blog</div>
              </a>
            </Button>

            <Button className={buttonColor} padding="true">
              <a href="#contact" className="blog-button">
                <div>
                  <BsFillChatDotsFill className="pen-icon" size={33} />
                </div>
                <div>Ask</div>
              </a>
            </Button>
          </div>
          <SocialMedia iconsMarginTop="true" />
        </div>
      </div>
      <Divider />
      <h2>Hello Everyone! My Name is Vahit</h2>
      <p>
        I am a full stack web developer. I use HTML, CSS and Javascript on a
        daily basis. I try to keep up with the latest practices in industry to
        bring the best result by pushing my limits.
      </p>

      <p>
        Although I started learning programming many years ago (around 2008), I
        made my first website in December 2018.
      </p>

      <p>
        In February 2021, I started to fully focus on web development and
        programming. Since then, I wake up everyday completely motivated to
        learn something new.
      </p>

      <Divider />
    </header>
  );
};

export default Home;
