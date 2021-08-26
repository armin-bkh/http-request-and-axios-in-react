const Commet = ({ name, email }) => {
    return ( 
        <article className={`d-flex-col`}>
            <h3>{name}</h3>
            <h3>{email}</h3>
        </article>
     );
}
 
export default Commet;