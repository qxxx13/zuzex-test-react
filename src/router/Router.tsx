import { Route, Routes } from 'react-router-dom';

import { ChatPage } from '../pages/ChatPage/ChatPage';
import { WelcomePage } from '../pages/WelcomePage/WelcomePage';
import { routes } from './routes';

export const Router: React.FC = () => {
    return (
        <Routes>
            <Route path={routes.root} element={<WelcomePage />} />
            <Route path={routes.chat} element={<ChatPage />} />
        </Routes>
    );
};
