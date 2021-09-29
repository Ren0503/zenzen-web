export const removeChannelLocalSt = (channelId) => {
    const user = JSON.parse(localStorage.getItem("user"));

    const updated = {
        ...user,
        channels: user.channels.filter((channel) => channel.id !== channelId),
    };

    localStorage.setItem("user", JSON.stringify(updated));
};

export const addChannelLocalSt = (channel) => {
    const user = JSON.parse(localStorage.getItem("user"));

    const updated = {
        ...user,
        channels: [channel, ...user.channels],
    };

    localStorage.setItem("user", JSON.stringify(updated));
};

export const updateUserLocalSt = (data) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const updatedUser = { ...user, ...data };
    localStorage.setItem("user", JSON.stringify(updatedUser));
};