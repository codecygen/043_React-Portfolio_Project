import classes from './SocialMedia.module.css';
import SocialButtonCard from './SocialButtonCard';

import { ImGithub, ImLinkedin, ImTwitter } from 'react-icons/im';

import {BsStackOverflow} from "react-icons/bs";

const SocialMedia = () => {

    const socialMediaList = [
        {
            id: 'a1',
            name: 'Linkedin',
            link: 'https://www.linkedin.com/in/aras-sen-71a4229b/',
            icon: <ImLinkedin className={classes['social-icons']} />
        },

        {
            id: 'a2',
            name: 'GitHub',
            link: 'https://github.com/codecygen',
            icon: <ImGithub className={classes['social-icons']} />
        },

        {
            id: 'a3',
            name: 'Twitter',
            link: 'https://twitter.com/codecygen',
            icon: <ImTwitter className={classes['social-icons']} />
        },

        {
            id: 'a4',
            name: 'Stack Overflow',
            link: 'https://stackoverflow.com/users/10824496/codecygen',
            icon: <BsStackOverflow className={classes['social-icons']} />
        },
    ];

    const socialIcons = socialMediaList.map(element => (
        <SocialButtonCard
            key={element.id}
            link={element.link}
        >
            {element.icon}
        </SocialButtonCard>
    ));

    return (
        <div>
            {socialIcons}
        </div>
    );
};

export default SocialMedia;
