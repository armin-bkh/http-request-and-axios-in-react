import { useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import Comment from "../Comment/Comment";

const CommentList = ({ comments, onClick, error }) => {
  const { addToast } = useToasts();

  useEffect(() => {
    if (error)
      addToast(error.message, { appearance: "error", autoDismiss: true });
  }, [error]);
  const renderComments = () => {
    let renderValue = <h1 className={`text-2xl text-center`}>Loading...</h1>;

    if (error)
      renderValue = <h1 className={`text-2xl text-center`}>{error.message}</h1>;

    if (comments.length && !error)
      renderValue = comments.map((comnt) => (
        <Comment
          key={comnt.id}
          name={comnt.name}
          email={comnt.email}
          onClick={() => onClick(comnt.id)}
        />
      ));

    return renderValue;
  };

  return (
    <section
      className={`d-flex-row p-5 ${!comments.length && `justify-center`}`}
    >
      {renderComments()}
    </section>
  );
};

export default CommentList;
