import { Navigate, useLocation } from 'react-router-dom';

import { useAppSelector } from '../store/hooks';
import { getIsConnected } from '../store/wsReducer/wsReducer';

type ProtectedRouteProps = {
    children: React.ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const location = useLocation();
    const isConnected = useAppSelector(getIsConnected);

    if (location.pathname === '/chat' && isConnected !== true) {
        return <Navigate to={'/'} replace />;
    } else {
        return <>{children}</>;
    }
};
