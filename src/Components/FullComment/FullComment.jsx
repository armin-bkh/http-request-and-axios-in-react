const FullComment = ({ comment }) => {
    return ( 
        comment ?
        <section class={`d-flex-col`}>
            <h3>{commet.name}</h3>
            <h3>{commet.email}</h3>
            <h3>{commet.body}</h3>
        </section> :
        null
     );
}
 
export default FullComment;