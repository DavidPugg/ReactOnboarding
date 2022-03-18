import axios from "axios";

const checkImage = async (url: string, img: string) => {
    try {
        await axios.head(url);
        return url;
    } catch (e) {
        return img;
    }
}
export default checkImage;