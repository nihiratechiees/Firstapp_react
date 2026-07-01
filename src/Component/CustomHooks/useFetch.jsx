import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [empdata, setEmpdata] = useState(null);

    useEffect(() => {
        fetch(url).then((res) => {
            return res.json();
        }).then((resp) => {
            setEmpdata(resp)
        }).catch((err) => {
            console.log(err.message)
        })
    }, [url])

    return empdata;
}
export default useFetch