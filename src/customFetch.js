import axios from "axios";

const useCustomFetch = ({}) => {
 const customFetch = axios.create({
  baseURL: `https://api.unsplash.com/search/photos?client_id=${}&query=${}`,
})
}