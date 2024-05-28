import { useEffect, useState } from 'react';

import { ConnectionManager } from '../../components/ConnectionManager/ConnectionManager';
import { MessageForm } from '../../components/MessageForm/MessageForm';
import { MessageList } from '../../components/MessageList/MessageList';
import { socket } from '../../socket';
import styles from './styles.module.scss';

export const ChatPage = () => {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [messages, setMessages] = useState<string[]>([]);
    const [connectedUser, setConnectedUser] = useState<{
        id: number;
        fName: string;
        sName: string;
        avatar: string;
    }>();

    console.log(connectedUser);

    useEffect(() => {
        const onConnect = () => {
            setIsConnected(true);
        };

        const onDisconnect = () => {
            setIsConnected(false);
        };

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('chat message', (msg) => {
            console.log(msg);
            setMessages((prev) => [...prev, msg]);
        });
        socket.on('user connect', (usr) => {
            setConnectedUser(usr);
        });

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('chat message');
            socket.off('user connect');
        };
    });
    return (
        <div className={styles.container}>
            <h1 className={styles.username}>Hello USERNAME</h1>
            <ConnectionManager />
            <MessageForm />
            <MessageList messages={messages} />
        </div>
    );
};
