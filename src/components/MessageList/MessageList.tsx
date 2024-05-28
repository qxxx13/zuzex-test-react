import React from 'react';

import styles from './styles.module.scss';

export const MessageList: React.FC<{ messages: string[] }> = ({ messages }) => {
    const messageList = messages.map((message, index) => (
        <p className={styles.message} key={index}>
            {message}
        </p>
    ));

    return (
        <div className={styles.container}>
            <div className={styles.messageListBg}></div>
            <div className={styles.messageList}>{messageList}</div>
        </div>
    );
};
