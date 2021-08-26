import styles from './Comment.module.scss';

const Comment = ({ name, email }) => {
    return ( 
        <article className={`p-5 d-flex-col bg-white shadow-lg rounded-full cursor-pointer ${styles.commentContainer}`}>
            <h3>name: {name}</h3>
            <h3>email: {email}</h3>
        </article>
     );
}
 
export default Comment;