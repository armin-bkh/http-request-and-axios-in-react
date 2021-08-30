import axios from "axios"
import { useEffect, useState } from "react"
import CommentList from "../../Components/CommentList/CommentList"
import FullComment from "../../Components/FullComment/FullComment"
import NewComment from "../../Components/NewComment/NewComment"

const Discusstion = () => {
    const [comments, setComments] = useState([]);
    const [commentId, setCommentId] = useState(null);
    const [error, setError] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        body: ''
    });

    useEffect(()=>{
        const getComments = async () => {
            try{
                const { data } = await axios.get("http://localhost:3001/comments");
                setComments(data);
            }
            catch(err){
                setError({message: "cant fetch data"});
            }
        }
        getComments();
    }, [])

    const selectCommentHandler = (id) =>{
        setCommentId(id);
    }

    return ( 
        <>
            <CommentList error={error} comments={comments} setError={setError} onClick={selectCommentHandler} />
            <FullComment error={error} commentId={commentId} setError={setError} setComments={setComments} />
            <NewComment setComments={setComments} />
        </>
     );
}
 
export default Discusstion;