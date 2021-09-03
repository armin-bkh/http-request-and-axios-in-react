import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styles from "./FullComment.module.scss";
import { getOneComment } from '../../Services/getOneCommentService';
import { deleteComment } from '../../Services/deleteCommentService';
import { Link } from "react-router-dom";

const FullComment = ({match, history}) => {
  const [comment, setComment] = useState("");
  const [error, setError] = useState('');
  let commentID = match.params.id;

  useEffect(() => {
      const getComment = async () => {
        const { data } = await getOneComment(commentID)
        setComment(data);
      };
      getComment();
  }, [commentID]);

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
      await deleteComment(commentID);
      await setError({message: 'comment successfully removed', type: 'success'});
      history.push("/");
    } catch (err) {
      setError({message: 'same error has been accord', type: 'error'});
    }
  };

  let returnValue = <h1 className={`text-purple-400 text-center`}><Link to="/">go to home page</Link></h1>;

  if (commentID) {
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
