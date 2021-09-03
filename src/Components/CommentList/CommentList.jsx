import Comment from "../Comment/Comment";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllComments } from "../../Services/getAllCommentsService";

const CommentList = () => {
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(false);

  useEffect(async ()=>{
    try{
      const { data } = await getAllComments();
      setComments(data); 
    }
    catch(err){
      setError({type: 'error', message: "error fetching data"})
    }
  }, [])
  let returnValue = <h1 className={`text-2xl`}>Loading...</h1>;
  if (comments.length && !error) {
    returnValue = comments.map((comnt) => (
      <Link to={`/comments/${comnt.id}`} key={comnt.id}>
        <Comment id={comnt.id} name={comnt.name} email={comnt.email} />
      </Link>
    ));
  }
  if (error) returnValue = <h1 className={`text-2xl`}>error data fetching</h1>;

  return (
    <section
      className={`d-flex-row p-5 ${!comments.length && `justify-center`}`}
    >
      {returnValue}
    </section>
  );
};

export default CommentList;
