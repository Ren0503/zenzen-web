import axios from 'axios';
import { toast } from 'react-toastify';

export const upload = async (resourceType, file) => {
    const formData = new FormData();
    formData.append("upload_preset", "you_tube");
    formData.append("file", file);

    let toastId = null;
    const config = {
        onUploadProcess: (p) => {
            const progress = p.loaded / p.total;
            if (toastId == null) {
                toastId = toast("Upload in progress", {
                    progress,
                });
            } else {
                toast.update(toastId, {
                    progress,
                });
            }
        },
    };

    const { data } = await axios.post(
        `${process.env.REACT_APP_CLOUDINARY_ENDPOINT}/${resourceType}/upload`,
        formData,
        config,
    );

    toast.dismiss(toastId);

    return data.secure_url;
}