import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import http from "../../Services/httpServices";
import styles from "./FullComment.module.scss";
import { getOneComment } from '../../Services/getOneCommentService';
import { deleteComment } from '../../Services/deleteCommentService';
import { getAllComments } from '../../Services/getAllCommentsService';
import { Link } from "react-router-dom";

const FullComment = ({ match }) => {
  const [comment, setComment] = useState("");
  const [error, setError] = useState('');
  const [commentId, setCommentId] = useState(match.params.id);

  useEffect(() => {
      const getComment = async () => {
        const { data } = await getOneComment(commentId)
        setComment(data);
      };
      getComment();
  }, []);

  useEffect(()=>{
    if(error){
      if(error.type === 'error')
      toast.error(error.message)
      if(error.type === 'success')
      toast.success(error.message)
    }
  }, [error])

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await deleteComment(commentId);
      setComment(null);
      setCommentId(null)
      setError({message: 'comment successfully removed', type: 'success'});
    } catch (err) {
      setError({message: 'same error has been accord', type: 'error'});
    }
  };

  let returnValue = <h1 className={`text-purple-400 text-center`}><Link to="/" >go to home page</Link></h1>;

  if (commentId) {
    returnValue = (
        <h1 className={`text-lg`}>Loading...</h1>
    );
  }

  if (comment) {
    returnValue = (
      <form className={`d-flex-col h-full`} onSubmit={submitHandler}>
        <h3 className={`text-indigo-700 font-medium`}>name: {comment.name}</h3>
        <h5 className={`text-indigo-700 font-medium`}>email: {comment.email}</h5>
        <p className={`text-indigo-700 font-medium`}>body: {comment.body}</p>
        <button
          className={`text-purple-400 bg-white border-2 border-purple-400 hover:bg-purple-400 hover:text-white hover:border-0 rounded-md px-2 py-1`}
          type="submit"
        >
          Remove
        </button>
      </form>
    );
  }

  return (
    <section
      className={`mt-4 d-flex-col bg-white shadow-lg ${styles.fullCommentContainer}`}
    >
      {returnValue}
    </section>
  );
};

export default FullComment;
