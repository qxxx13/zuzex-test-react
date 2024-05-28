import { UserType } from '../../../types/UserType';
import styles from './styles.module.scss';

export const ActiveUserItem: React.FC<{ user: UserType }> = ({ user }) => {
    return (
        <h4 className={styles.username}>
            <img src={user.avatar} alt="avatar" className={styles.avatar} />
            {user.fName} {user.lName}
        </h4>
    );
};
