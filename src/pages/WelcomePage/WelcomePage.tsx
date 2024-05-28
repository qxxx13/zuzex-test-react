import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/StyledComponent/Button/Button';
import { socket } from '../../socket';
import styles from './styles.module.scss';

export const WelcomePage = () => {
    const navigate = useNavigate();

    const connect = () => {
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
