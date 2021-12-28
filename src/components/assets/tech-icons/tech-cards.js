import Card from '../../UI/Card';

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { ImGithub } from "react-icons/im";
import { SiHeroku } from "react-icons/si";
import { SiFirebase } from "react-icons/si";

import expressLink from './express.svg';

import classes from './tech-cards.module.css';

const techButtons = [
    {
        key: 'a1',
        icon: <FaHtml5 className={classes.html5} />,
        name: 'HTML5'
    },
    {
        key: 'a2',
        icon: <IoLogoCss3 className={classes.css3} />,
        name: 'CSS3'
    },
    {
        key: 'a3',
        icon: <SiJavascript className={classes.javascript} />,
        name: 'Javascript'
    },

    {
        key: 'a4',
        icon: <FaReact className={classes.react} />,
        name: 'React'
    },

    {
        key: 'a5',
        icon: <FaBootstrap className={classes.bootstrap} />,
        name: 'Bootstrap'
    },

    {
        key: 'a6',
        icon: <SiJquery className={classes.jquery} />,
        name: 'jQuery'
    },

    {
        key: 'a7',
        icon: <FaNode className={classes.nodejs} />,
        name: 'Node.js'
    },

    {
        key: 'a8',
        icon: <img src={expressLink} alt="It is express.js" className={classes.expressjs} />,
        name: 'Express.js'
    },

    {
        key: 'a9',
        icon: <DiMongodb className={classes.mongodb} />,
        name: 'MongoDB'
    },

    {
        key: 'a10',
        icon: <DiGit className={classes.git} />,
        name: 'Git'
    },

    {
        key: 'a11',
        icon: <ImGithub className={classes.github} />,
        name: 'GitHub'
    },

    {
        key: 'a12',
        icon: <SiHeroku className={classes.heroku} />,
        name: 'Heroku'
    },

    {
        key: 'a13',
        icon: <SiFirebase className={classes.firebase} />,
        name: 'Firebase'
    },
];

const techCards = techButtons.map(techButton => (
    <Card key={techButton.key}>
        <div className={classes['tech-icons']}>
            {techButton.icon}
        </div>
        <p className={classes['tech-icons-p']}>{techButton.name}</p>
    </Card>
));

export default techCards;