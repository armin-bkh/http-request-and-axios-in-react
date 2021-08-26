import axios from "axios"
import { useEffect, useState } from "react"
import CommentList from "../../Components/CommentList/CommentList"
import FullComment from "../../Components/FullComment/FullComment"
import NewComment from "../../Components/NewComment/NewComment"

const Discusstion = () => {
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        const getComments = async () => {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/comments");
            setComments(data.splice(0, 4));
        }
        getComments();
    }, [])
    return ( 
        <>
            <CommentList comments={comments} />
            {/* <FullComment />
            <NewComment /> */}
        </>
     );
}
 
export default Discusstion;