import { useState } from 'react';

import { socket } from '../../socket';
import { Button } from '../StyledComponent/Button/Button';
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

        console.log(message);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.chatForm}>
            <input
                onChange={(e) => messageHandler(e)}
                value={message}
                className={styles.input}
            />
            <Button type="submit">Send</Button>
        </form>
    );
};
