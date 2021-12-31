import classes from './SocialMedia.module.css';
import ButtonCard from '../ui/ButtonCard';

import { ImGithub } from 'react-icons/im';
import { ImLinkedin } from 'react-icons/im';
import { ImTwitter } from 'react-icons/im';

const SocialMedia = () => {



    return (
        <>
            <ButtonCard><ImLinkedin className={classes['social-icons']} /></ButtonCard> 
            <ButtonCard><ImGithub className={classes['social-icons']} /></ButtonCard>
            <ButtonCard><ImTwitter className={classes['social-icons']} /></ButtonCard>
        </>
    );
};

export default SocialMedia;
