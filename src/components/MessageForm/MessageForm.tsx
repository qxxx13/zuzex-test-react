import { useState } from 'react';

import { socket } from '../../socket';
import { Button } from '../StyledComponent/Button/Button';
import { uploadImage } from './messageHepler/messageHelper';
import styles from './styles.module.scss';

export const MessageForm = () => {
    const [message, setMessage] = useState('');

    const messageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (message) {
            socket.emit('chat message', message);
            setMessage('');
        }
    };

    const imageMessageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        uploadImage(event);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.chatForm}>
            <input
                onChange={(e) => messageHandler(e)}
                value={message}
                className={styles.input}
            />
            <input
                type="file"
                accept="image/png, image/jpeg"
                className={styles.imageInput}
                onChange={(e) => imageMessageHandler(e)}
            />
            <Button type="submit">Send</Button>
        </form>
    );
};
