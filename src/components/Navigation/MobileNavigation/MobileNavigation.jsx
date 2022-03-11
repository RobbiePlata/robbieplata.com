import { useScrollLock, useClickOutside } from "@/hooks";
import { Link, useLocation } from "react-router-dom";
import { PATHNAME } from "@/utils/constants";
import { HamburgerIcon, HomeIcon, CodeIcon } from "@/components/icons";
import { useEffect, useState, useRef } from "react";
import { useStateValue } from "@/state";
import clsx from "clsx";
import styles from './MobileNavigation.module.scss';

const MobileNavigation = () => {
  
    const {
      state: { deviceSize, isNavOpened },
      action: { setNavOpened }
    } = useStateValue();
    const menuRef = useRef(null);
    const { pathname } = useLocation();

    useEffect(() => {
        setNavOpened(false);
    }, [pathname]);
    
    useScrollLock(isNavOpened);
    useClickOutside(menuRef, () => setNavOpened(false));

    return (
        <div className={styles.nav__wrapper}>
          <div className={styles.nav__top}>
            <button type='button' className={styles.button__menu} onClick={() => setNavOpened(true)}>
            <span className="material-icons md-30 md-light">menu</span>
            </button>
          </div>
            <div ref={menuRef} className={clsx(styles.menu, isNavOpened && styles[`menu--opened`])}>
            <div className={styles.menu__top}>
              <button type='button' className={styles.button__close} onClick={() => setNavOpened(false)}>
                <span className="material-icons md-30 md-light">menu</span>
              </button>
            </div>

            <div className={styles.menu__main}>
              {[
                { key: 'home', text: 'Home', _pathname: PATHNAME.HOME, icon: "home" },
                { key: 'projects', text: 'Projects', _pathname: PATHNAME.PROJECTS, icon: "code" },
                { key: 'articles', text: 'Articles', _pathname: PATHNAME.ARTICLES, icon: "articles" },
                { key: 'contact', text: 'Contact', _pathname: PATHNAME.CONTACT, icon: "contact" },
                { key: 'about', text: 'About', _pathname: PATHNAME.ABOUT, icon: "info" }
              ].map(({ text, _pathname, icon, key }, mIndex) => (
                <Link
                  key={mIndex}
                  className={clsx(
                    styles.menu__item,
                    (pathname === _pathname) && styles['menu__item--active']
                    )}
                    to={{ pathname: _pathname }}
                    >
                  <div className={clsx(
                    styles.menu__item__icon,
                    styles[`menu__item__icon--${key}`]
                    )}>
                    <span className="material-icons md-30 md-inactive">{icon}</span>
                  </div>
                  <span dangerouslySetInnerHTML={{ __html: text }} />
                </Link>
              ))}
            </div>
          </div>
        </div>
    )
};

export default MobileNavigation;