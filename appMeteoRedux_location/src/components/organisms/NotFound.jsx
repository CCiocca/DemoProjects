import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import ErrorMessage from "../molecules/ErrorMessage404";

//this is the landing page of an inexistent path

const NotFound = () => {
    const navigate = useNavigate();

    const [count, setCount] = useState(10);

    //at the render of the component, a timer that counts from 10 to 0 will start, when the component unmounts, the interval is cleared
    useEffect(() => {
      const timer = setInterval(() => setCount((oldCount) => oldCount - 1), 1000);
      return () => {
        clearInterval(timer);
      };
    }, []);

    //this makes the user navigate to the homepage after 10 seconds from the render of this component
    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 10000)
    }, [])


    return(
        <>
        <ErrorMessage/>
        </>
)
}

export default NotFound