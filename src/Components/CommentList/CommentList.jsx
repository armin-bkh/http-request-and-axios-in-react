import Comment from "../Comment/Comment";

const CommetList = ({ comments }) => {
  return commet.length ? (
    <section className={`d-flex-row`}>
      {commet.map((comnt) => (
        <Comment name={comnt.name} email={comnt.email} />
      ))}
    </section>
  ) : null;
};

export default CommetList;
