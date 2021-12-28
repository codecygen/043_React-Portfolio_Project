import Card from '../../UI/Card';

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { ImGithub } from "react-icons/im";
import { SiHeroku } from "react-icons/si";
import { SiFirebase } from "react-icons/si";

import classes from './tech-cards.module.css';

const techButtons = [
    {
        key: 1,
        icon: <FaHtml5 className={classes.html5} />,
        name: 'HTML5'
    },
    {
        key: 2,
        icon: <IoLogoCss3 className={classes.css3} />,
        name: 'CSS3'
    },
    {
        key: 3,
        icon: <SiJavascript className={classes.javascript} />,
        name: 'Javascript'
    },

    {
        key: 4,
        icon: <FaReact className={classes.react} />,
        name: 'React'
    },

    {
        key: 5,
        icon: <FaBootstrap className={classes.bootstrap} />,
        name: 'Bootstrap'
    },

    {
        key: 6,
        icon: <SiJquery className={classes.jquery} />,
        name: 'jQuery'
    },

    {
        key: 7,
        icon: <FaNode className={classes.nodejs} />,
        name: 'Node.js'
    },

    {
        key: 8,
        icon: <DiMongodb className={classes.mongodb} />,
        name: 'MongoDB'
    },

    {
        key: 9,
        icon: <ImGithub className={classes.github} />,
        name: 'GitHub'
    },

    {
        key: 10,
        icon: <SiHeroku className={classes.heroku} />,
        name: 'Heroku'
    },

    {
        key: 11,
        icon: <SiFirebase className={classes.firebase} />,
        name: 'Firebase'
    },
];

const techCards = techButtons.map(techButton => (
    <Card>
        <div className={classes['tech-icons']}>
            {techButton.icon}
        </div>
        <p className={classes['tech-icons-p']}>{techButton.name}</p>
    </Card>
));

export default techCards;