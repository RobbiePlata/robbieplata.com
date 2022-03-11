import styles from './Home.module.scss';
import { EmailIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";
import { LINKS } from "@/utils/constants";
import clsx from 'clsx';
import { useEffect } from 'react';
import { useStateValue } from '@/state';

const Home = () => {

    const state = useStateValue();
    const { state: { theme }} = state;
    console.log(styles)

    return (
        <div className={clsx({[styles.home_page]: true })}>
            <div className={styles.home_page__header}>
                <div className={clsx({[styles.home_page__header_title]: true , [styles.dark]: theme === 'light' })}
                    dangerouslySetInnerHTML={{__html: "Robbie Plata"}}
                    />
                <div className={styles.home_page__header_info}>
                    <div className={clsx({[styles.home_page__header_info_description]: true , [styles.dark]: theme === 'light' })}>
                        Full Stack Developer
                    </div>
                    <div className={clsx({[styles.home_page__header_info_links]: true, [styles.dark]: theme === 'light' })}>
                        <a href={LINKS.GITHUB} alt="" target="_blank" rel="noreferrer"><GitHubIcon/></a>
                        <a href={LINKS.LINKEDIN} alt="" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;