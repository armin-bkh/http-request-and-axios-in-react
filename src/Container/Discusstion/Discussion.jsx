import axios from "axios"
import { useEffect, useState } from "react"
import { useToasts } from "react-toast-notifications"
import CommentList from "../../Components/CommentList/CommentList"
import FullComment from "../../Components/FullComment/FullComment"
import NewComment from "../../Components/NewComment/NewComment"

const Discusstion = () => {
    const [comments, setComments] = useState([]);
    const [commentId, setCommentId] = useState(null);
    const [error, setError] = useState('');
    const { addToast } = useToasts();

    useEffect(()=>{
        const getComments = async () => {
            try{
                const { data } = await axios.get("http://localhost:3001/comments");
                setComments(data);
            }
            catch(err){
                setError({message: 'data fetching delete', type: 'error'});
            }
        }
        getComments();
    }, [])

    useEffect(()=>{
        if(error){
            addToast(error.message, {appearance: error.type, autoDismiss: true})
        }
    }, [error])

    const selectCommentHandler = (id) =>{
        setCommentId(id);
    }

    return ( 
        <>
            <CommentList error={error} comments={comments} onClick={selectCommentHandler} />
            <FullComment commentId={commentId} setComments={setComments} />
            <NewComment setComments={setComments} />
        </>
     );
}
 
export default Discusstion;