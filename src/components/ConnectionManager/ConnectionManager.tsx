import { useNavigate } from 'react-router-dom';

import { socket } from '../../socket';
import { Button } from '../StyledComponent/Button/Button';
import styles from './styles.module.scss';

export const ConnectionManager = () => {
    const navigate = useNavigate();

    const disconnect = () => {
        socket.disconnect();
        navigate('/');
    };

    return (
        <div className={styles.container}>
            <Button onClick={disconnect}>Отключиться</Button>
        </div>
    );
};
