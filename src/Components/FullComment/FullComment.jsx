import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./FullComment.module.scss";

const FullComment = ({ commentId }) => {
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
      className={`d-flex-col bg-white shadow-lg ${styles.fullCommentContainer}`}
    >
      {comment ? (
        <>
          <h3>{comment.name}</h3>
          <h5>{comment.email}</h5>
          <p>{comment.body}</p>
        </>
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
