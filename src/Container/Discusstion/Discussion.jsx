import http from "../../Services/httpServices";
import { useEffect, useState } from "react";
import CommentList from "../../Components/CommentList/CommentList";
import FullComment from "../../Components/FullComment/FullComment";
import NewComment from "../../Components/NewComment/NewComment";
import { toast } from "react-toastify";
import { getAllComments } from "../../Services/getAllCommentsService";

const Discusstion = () => {
  const [comments, setComments] = useState([]);
  const [commentId, setCommentId] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await getAllComments();
        setComments(data);
      } catch (err) {
        setError({ message: "data fetching delete", type: "error" });
      }
    };
    getComments();
  }, []);

  useEffect(() => {
    if (error) {
        if(error.type === 'error')
        toast.error(error.message)
        if(error.type === 'success')
        toast.success(error.message)
    }
  }, [error]);

  const selectCommentHandler = (id) => {
    setCommentId(id);
  };

  return (
    <>
      <CommentList
        error={error}
        comments={comments}
        onClick={selectCommentHandler}
      />
      <FullComment commentId={commentId} setComments={setComments} setCommentId={setCommentId} />
      <NewComment setComments={setComments} />
    </>
  );
};

export default Discusstion;
