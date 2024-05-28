import { socket } from '../../socket';

export const initialWsState = {
    isConnected: socket.connected,
};
