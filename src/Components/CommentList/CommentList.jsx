import Comment from "../Comment/Comment";

const CommentList = ({ comments, onClick, error }) => {
  let returnValue = <h1 className={`text-2xl`}>Loading...</h1>;

  if(comments.length && !error) {
    returnValue = comments.map((comnt) => (
    <Comment
      id={comnt.id}
      key={comnt.id}
      name={comnt.name}
      email={comnt.email}
      onClick={() => onClick(comnt.id)}
  />))
}
if(error) returnValue = <h1 className={`text-2xl`}>error data fetching</h1>;

  return (
    <section
      className={`d-flex-row p-5 ${!comments.length && `justify-center`}`}
    >
      {returnValue}
    </section>
  );
};

export default CommentList;
