import React from 'react';

import styles from './styles.module.scss';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.bg + ' ' + styles.background}></div>
            <div className={styles.bg + ' ' + styles.midground}></div>
            <div className={styles.bg + ' ' + styles.foreground}></div>
            {children}
        </div>
    );
};
