import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";
const KEY = "32928385-c573e9cc533413973b7398451";

const fetchImagesWithQuery = async (searchImages) => {
    try {
        const page = 1;
        const response = await axios.get(`?q=${searchImages}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);
        return response;  
    } 
    catch (error) {
        console.error(error);
    }
}   
export default fetchImagesWithQuery;