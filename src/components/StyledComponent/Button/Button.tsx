import styles from './styles.module.scss';

type ButtonProps = {
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset' | undefined;
};

export const Button: React.FC<ButtonProps> = ({ onClick, children, type }) => {
    return (
        <button onClick={onClick} className={styles.button} type={type || 'button'}>
            {children}
        </button>
    );
};
