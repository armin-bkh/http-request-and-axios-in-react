import axios from "axios";
import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import styles from "./FullComment.module.scss";

const FullComment = ({ commentId, setComments, error, setError }) => {
  const [comment, setComment] = useState('');
  const { addToast } = useToasts();

  useEffect(() => {
    if (commentId) {
      const getComment = async () => {
        const { data } = await axios.get(
          `http://localhost:3001/comments/${commentId}`
        );
        setComment(data);
      };
      getComment();
    }
  }, [commentId]);

  const submitHandler = async (e) =>{
    e.preventDefault();
    try{
      await axios.delete(`http://localhost:3001/comments/${commentId}`);
      const { data } = axios.get("http://localhost:3001/comments");
      setComments(data);
    }
    catch(err){
      console.log(err);
    }
  }

  let returnValue = <h1>select one comment</h1>;

  if(commentId) {
    returnValue = (
    <section
      className={`d-flex-col bg-white shadow-lg ${styles.fullCommentContainer}`}
    >
      <h1 className={`text-lg`}>Loading...</h1>
    </section>
  )
  }

  if (comment) {
    returnValue = (
      <section
        className={`d-flex-col bg-white shadow-lg ${styles.fullCommentContainer}`}
      >
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
      </section>
    );
  }
  
  return returnValue;
};

export default FullComment;
