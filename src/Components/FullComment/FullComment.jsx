import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import http from "../../Services/httpServices";
import styles from "./FullComment.module.scss";
import { getOneComment } from '../../Services/getOneCommentService';
import { deleteComment } from '../../Services/deleteCommentService';
import { getAllComments } from '../../Services/getAllCommentsService';

const FullComment = ({ commentId, setComments, setCommentId }) => {
  const [comment, setComment] = useState("");
  const [error, setError] = useState('');

  useEffect(() => {
    if (commentId) {
      const getComment = async () => {
        const { data } = await getOneComment(commentId)
        setComment(data);
      };
      getComment();
    }
  }, [commentId]);

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
      const { data } = await getAllComments();
      setComments(data);
      setComment(null);
      setCommentId(null);
      setError({message: 'comment successfully removed', type: 'success'});
    } catch (err) {
      setError({message: 'same error has been accord', type: 'error'});
    }
  };

  let returnValue = <h1 className={`text-center`}>select one comment</h1>;

  if (commentId) {
    returnValue = (
        <h1 className={`text-lg`}>Loading...</h1>
    );
  }

  if (comment) {
    returnValue = (
      <form className={`d-flex-col h-full`} onSubmit={submitHandler}>
        <h3>name: {comment.name}</h3>
        <h5>email: {comment.email}</h5>
        <p>body: {comment.body}</p>
        <button
          className={`text-white bg-gray-900 rounded-md px-2 py-1`}
          type="submit"
        >
          Remove
        </button>
      </form>
    );
  }

  return (
    <section
      className={`d-flex-col bg-white shadow-lg ${styles.fullCommentContainer}`}
    >
      {returnValue}
    </section>
  );
};

export default FullComment;
