import { UserType } from '../../types/UserType';
import { ActiveUserItem } from './ActiveUserItem/ActiveUserItem';
import styles from './styles.module.scss';

export const ActiveUsersList: React.FC<{ users: UserType[] }> = ({ users }) => {
    const usersList = users.map((user, index) => (
        <ActiveUserItem user={user} key={index} />
    ));

    return (
        <div className={styles.container}>
            <h2>Активно: {users.length}</h2>
            {usersList}
        </div>
    );
};
