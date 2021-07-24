import axios from "axios";

export const getSearchBookList:any  = (url:string, keyword:string) => {
    return axios.get(url+keyword).then(res => res.data);
}