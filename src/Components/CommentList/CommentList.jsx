import Comment from "../Comment/Comment";

const CommentList = ({ comments, onClick }) => {
  return comments.length ? (
    <section className={`d-flex-row p-5`}>
      {comments.map((comnt) => (
        <Comment key={comnt.id} name={comnt.name} email={comnt.email} onClick={()=> onClick(comnt.id)} />
      ))}
    </section>
  ) :
  <section className={`h-60 d-flex-row justify-center`}>
    <h1 className={`text-center`}>loading...</h1>
  </section> 
};

export default CommentList;
