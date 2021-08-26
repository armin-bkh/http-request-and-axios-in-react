import styles from './Comment.module.scss';

const Comment = ({ name, email, onClick }) => {
    return ( 
        <article onClick={onClick} className={`p-5 d-flex-col bg-white shadow-lg rounded-full cursor-pointer hover:shadow-xl transition-shadow ${styles.commentContainer}`}>
            <h3>name: {name}</h3>
            <h3>email: {email}</h3>
        </article>
     );
}
 
export default Comment;