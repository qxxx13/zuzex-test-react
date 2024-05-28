import styles from './styles.module.scss';

type ButtonProps = {
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset' | undefined;
    children: string;
};

export const Button: React.FC<ButtonProps> = ({ onClick, type, children }) => {
    return (
        <button onClick={onClick} className={styles.button} type={type || 'button'}>
            {children}
        </button>
    );
};
