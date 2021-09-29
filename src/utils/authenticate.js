import { client } from 'utils/fetch';

export const authenticate = async (type, data) => {
    const backendUrl = process.env.REACT_APP_BE;

    try {
        const { data: token } = await client(`${backendUrl}/auth/${type}`, {
            body: data,            
        });

        if (token) {
            const { data: user } = await client(`${backendUrl}/auth/me`, { token });

            localStorage.setItem("user", JSON.stringify({ ...user, token }));
            
            return { ...user, token };
        }
    } catch (err) {
        console.log(err)
    }
}