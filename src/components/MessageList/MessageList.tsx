import React from 'react';

import styles from './styles.module.scss';

export const MessageList: React.FC<{ messages: string[] }> = ({ messages }) => {
    const messageList = messages.map((message, index) =>
        message.includes('data:image/') ? (
            <img
                src={message}
                alt="message"
                key={index}
                className={styles.messageImage}
            />
        ) : (
            <p className={styles.message} key={index}>
                {message}
            </p>
        ),
    );

    return (
        <div className={styles.container}>
            <div className={styles.messageListBg}></div>
            <div className={styles.messageList}>{messageList}</div>
        </div>
    );
};
