import axios from "axios"
import { useEffect, useState } from "react"
import CommentList from "../../Components/CommentList/CommentList"
import FullComment from "../../Components/FullComment/FullComment"
import NewComment from "../../Components/NewComment/NewComment"

const Discusstion = () => {
    const [comments, setComments] = useState([]);
    const [commentId, setCommentId] = useState(null);
    useEffect(()=>{
        const getComments = async () => {
            try{
                const { data } = await axios.get("https://jsonplaceholder.typicode.com/comments");
                setComments(data.splice(0, 4));
            }
            catch(err){
                console.log(err);
            }
        }
        getComments();
    }, [])

    const selectCommentHandler = (id) =>{
        setCommentId(id);
    }

    return ( 
        <>
            <CommentList comments={comments} onClick={selectCommentHandler} />
            <FullComment commentId={commentId} />
            <NewComment />
        </>
     );
}
 
export default Discusstion;