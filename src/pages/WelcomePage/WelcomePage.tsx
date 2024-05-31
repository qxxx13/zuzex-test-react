import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/StyledComponent/Button/Button';
import { socket } from '../../socket';
import { useAppDispatch } from '../../store/hooks';
import { setIsConnected } from '../../store/wsReducer/wsReducer';
import styles from './styles.module.scss';

export const WelcomePage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const connect = () => {
        dispatch(setIsConnected(true));
        navigate('/chat');
        socket.connect();
    };

    return (
        <div className={styles.container}>
            <div>
                <h1>Привет, добро пожаловать в чат!</h1>
                <Button onClick={connect}>Войти</Button>
            </div>
        </div>
    );
};
