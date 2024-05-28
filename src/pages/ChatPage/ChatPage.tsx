import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { ActiveUsersList } from '../../components/ActiveUsersList/ActiveUsersList';
import { ConnectionManager } from '../../components/ConnectionManager/ConnectionManager';
import { MessageForm } from '../../components/MessageForm/MessageForm';
import { MessageList } from '../../components/MessageList/MessageList';
import { socket } from '../../socket';
import { getMessages, setChatMessages } from '../../store/chatReducer/chatReducer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
    getConnectedUsers,
    getCurrentUser,
    setConnectedUsers,
    setCurrentUser,
    setUserDisconnected,
} from '../../store/userReducer/userReducer';
import { getIsConnected, setIsConnected } from '../../store/wsReducer/wsReducer';
import { UserType } from '../../types/UserType';
import styles from './styles.module.scss';

export const ChatPage = () => {
    const dispatch = useAppDispatch();

    const messages = useAppSelector(getMessages);
    const currentUser = useAppSelector(getCurrentUser);
    const activeUser = useAppSelector(getConnectedUsers);

    useEffect(() => {
        const onConnect = () => {
            dispatch(setIsConnected(true));
        };

        const onDisconnect = () => {
            dispatch(setIsConnected(false));
        };

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('chat message', (msg: string) => {
            dispatch(setChatMessages(msg));
        });
        socket.on('user connect', (usr) => {
            dispatch(setCurrentUser(usr));
        });

        socket.on('user connected', (usr: UserType[]) => {
            dispatch(setConnectedUsers(usr));
        });

        socket.on('user disconnect', (id: string) => {
            dispatch(setUserDisconnected(id));
        });

        return () => {
            socket.off('connect', onConnect);
            socket.off('user disconnect', onDisconnect);
            socket.off('chat message');
            socket.off('user connect');
            socket.off('user connected');
            socket.off('user disconnect');
        };
    });
    return (
        <div className={styles.container}>
            <ActiveUsersList users={activeUser} />
            <h1 className={styles.username}>
                <img src={currentUser.avatar} alt="avatar" className={styles.avatar} />
                {currentUser.fName} {currentUser.lName}
            </h1>
            <ConnectionManager />
            <MessageForm />
            <MessageList messages={messages} />
        </div>
    );
};
