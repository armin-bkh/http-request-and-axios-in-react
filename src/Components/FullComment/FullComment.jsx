import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./FullComment.module.scss";

const FullComment = ({ commentId, onDelete }) => {
  const [comment, setComment] = useState({});

  useEffect(() => {
    if (commentId) {
      const getComment = async () => {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/comments/${commentId}`
        );
        setComment(data);
      };
      getComment();
    }
  }, [commentId]);

  return commentId ? (
    <section
      className={`bg-white shadow-lg ${styles.fullCommentContainer}`}
    >
      {comment ? (
        <form className={`d-flex-col h-full`} onSumbit={onDelete}>
          <h3>name: {comment.name}</h3>
          <h5>email: {comment.email}</h5>
          <p>body: {comment.body}</p>
          <button className={`text-white bg-gray-900 rounded-md px-2 py-1`} type="submit">
            Remove
          </button>
        </ form>
      ) : (
        <h1>loading...</h1>
      )}
    </section>
  ) : (
    <section
      className={`d-flex-col bg-white shadow-lg ${styles.fullCommentContainer}`}
    >
      <h1 className={`text-lg`}>please select any comment</h1>
    </section>
  );
};

export default FullComment;
