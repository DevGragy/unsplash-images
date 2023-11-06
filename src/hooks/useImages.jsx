import {useState} from "react";
import {URL, CLIENT_ID} from "../api/credentials";

const useImages = () => {
    const [images, setImages] = useState([]);

    const handleImages = async (values) => {
        const response = await fetch(URL + values.search, {
            headers: {
                Authorization: CLIENT_ID,
            },
        });
        const data = await response.json();
        setImages(data.results);
    };

    return {images, handleImages}
}

export default useImages