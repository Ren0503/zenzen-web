import { toast } from "react-toastify";

export const client = async (endpoint, { body, ...customConfig} = {}) => {
    const user = JSON.parse(localStorage.getItem("user"));

    const config = {
        method: body ? "POST" : "GET",
        ...customConfig,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    };

    if (body) {
        config.body = JSON.stringify(body);
    }

    if (customConfig.token) {
        config.headers.authorization = `Bearer ${customConfig.token}`;
    }

    if (!customConfig.token && user?.token) {
        config.headers.authorization = `Bearer ${user.token}`;
    }

    const res = await fetch(endpoint, config);
    const data = await res.json();

    if (res.status !== 200) {
        return toast(data.message);
    }

    return data;
};