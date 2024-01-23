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
          <h1>Vahit</h1>
          <h3>Software Developer</h3>
          <h4 className={classes["same-line"]}>
            Proudly Torontonian
            <FaCanadianMapleLeaf className="maple-icon" />
          </h4>
          <p>
            I am a software developer / mechanical engineer and currently
            employed at Zillow
          </p>
          <div className={classes["link-container"]}>
            <Button className={buttonColor} padding="true">
              <a href="https://drive.google.com/file/d/1m-KRo08C9wo98TfuC4XUElAAU4cBPWTN/view?usp=sharing">
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
      <h2>Thanks for stopping by</h2>
      <p>
        I am a seasoned software developer with a rich history in programming,
        dating back to my initiation in 2008. My professional journey reached a
        milestone in December 2018 when I successfully deployed my first
        website.
      </p>

      <p>
        I'm dedicated to staying on top of the latest industry trends, exceeding
        expectations, and pushing the boundaries of my technical expertise. It's
        all about showcasing my substantial knowledge in the field.
      </p>

      <p>Lets connect!</p>

      <Button className={buttonColor} padding="true">
        <a href="#contact" className="blog-button">
          <div>
            <BsFillChatDotsFill className="pen-icon" size={33} />
          </div>
          <div>Ask</div>
        </a>
      </Button>

      <Divider />
    </header>
  );
};

export default Home;
