import axios from "axios";

export default async (url: string, img: string) => {
    try {
        await axios.head(url);
        return url;
    } catch (e) {
        return img;
    }
}