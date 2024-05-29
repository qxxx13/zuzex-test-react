import { socket } from '../../../socket';

export const convertToBase64 = (file: Blob) => {
    return new Promise((resolve, reject) => {
        const fr = new FileReader();

        fr.readAsDataURL(file);

        fr.onload = () => {
            resolve(fr.result);
        };

        fr.onerror = (error) => {
            reject(error);
        };
    });
};

export const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];

    const base64 = (await convertToBase64(file)
        .then((res) => {
            return res;
        })
        .catch((error) => {
            return '';
        })) as string;

    socket.emit('image message', base64);

    return base64;
};
