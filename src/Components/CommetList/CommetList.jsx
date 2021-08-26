import Commet from "../Commet/Commet";

const CommetList = ({ commets }) => {
  return commet.length ? (
    <section>
      {commet.map((comt) => (
        <Commet name={comt.name} email={comt.email} />
      ))}
    </section>
  ) : null;
};

export default CommetList;
