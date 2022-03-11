import { useLocation, Link } from "react-router-dom";
import { useNavigate } from "@/hooks";
import { useStateValue } from "@/state";
import { useRef, useEffect } from "react";
import MobileNavigation from "./MobileNavigation";
import styles from './Navigation.module.scss';
import clsx from 'clsx';
import { PATHNAME } from "@/utils/constants";
import { Tooltip } from '@/components';

const Navigation = () => {
    const navRef = useRef(null);
    const {
        state: { deviceSize, isNavOpened, theme },
        action: { setNavOpened, setTheme }
    } = useStateValue();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      console.log(theme);
    }, [theme]);

    useEffect(() => {
        if (['xxl', 'xxxl'].includes(deviceSize)) setNavOpened(false);
        else setNavOpened(false);
        // eslint-disable-next-line
      }, [deviceSize])

    if (['xs', 'sm', 'md'].includes(deviceSize)) return <MobileNavigation />;

    return (
        <div onMouseOver={() => setNavOpened(true)} onMouseLeave={() => setNavOpened(false)}
        ref={navRef} className={clsx(styles.nav, isNavOpened && styles['nav--opened'])}>
            <div className={styles.nav__top}>
            <div className={styles.nav__logo}/>
            <div className={styles.nav__main}>
              {[
                { id: 'home', tooltip: 'Home', text: 'Home', _pathname: PATHNAME.HOME, Icon: "home" },
                { id: 'projects', tooltip: 'Projects', text: 'Projects', _pathname: PATHNAME.PROJECTS, Icon: "code" },
                { id: 'articles', tooltip: 'Articles', text: 'Articles', _pathname: PATHNAME.ARTICLES, Icon: "articles" },
                { id: 'about', tooltip: 'About', text: 'About', _pathname: PATHNAME.ABOUT, Icon: "info" },
                { id: 'contact', tooltip: 'Contact', text: 'Contact', _pathname: PATHNAME.CONTACT, Icon: "email" }
              ].map(({ id, text, tooltip, _pathname, Icon }, mIndex) => {
                return isNavOpened ? (
                  <Link
                    key={mIndex}
                    className={clsx(
                      styles.nav__item,
                      (pathname === _pathname) && styles['nav__item--active']
                    )}
                    to={{ pathname: _pathname }}
                  >
                    <div className={clsx(
                      styles.nav__item__icon,
                      styles[`nav__item__icon--${id}`]
                    )}><span className="material-icons md-30 md-inactive">{Icon}</span></div>
                    {isNavOpened ? <span dangerouslySetInnerHTML={{ __html: text }} /> : null}
                  </Link>
                ) : (
                  <Tooltip
                    key={mIndex}
                    title={tooltip}
                    placement='right'
                  >
                    <Link
                      className={clsx(
                        styles.nav__item,
                        (pathname === _pathname) && styles['nav__item--active']
                      )}
                      to={{ pathname: _pathname }}
                    >
                      <div className={clsx(
                        styles.nav__item__icon,
                        styles['nav__item__icon--visible'],
                        styles[`nav__item__icon--${id}`]
                      )}><span className="material-icons md-30 md-inactive">{Icon}</span></div>
                    </Link>
                  </Tooltip>
                )
              })}
          </div>
        </div>
        <div onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className={styles.nav__bottom}>
          <div className={styles.nav__item__icon}>
            <span className="material-icons md-30 md-active">dark_mode</span>
          </div>
        </div>
      </div>
    )
};

export default Navigation;