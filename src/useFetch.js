import {useState} from "react";

export default function useFetch(baseUrl){
    const [isLoading, setLoading] = useState(true);

    function get(url){
        return new Promise((resolve, reject) => {
            fetch(baseUrl + url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setLoading(false);
                resolve(data);
            })
            .catch(error => {
                setLoading(false);
                reject(error);
            });
        });
    }

    return {get, isLoading};
}