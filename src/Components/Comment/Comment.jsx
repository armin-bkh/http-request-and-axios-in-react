import { Link } from 'react-router-dom';
import styles from './Comment.module.scss';

const Comment = ({ name, email, id, onClick }) => {
    return ( 
        <Link to={`/comments/${id}`}>
        <article onClick={onClick} className={`p-5 d-flex-col bg-white shadow-lg rounded-full cursor-pointer hover:shadow-xl transition-shadow ${styles.commentContainer}`}>
            <h3 className={`text-purple-400 font-semibold`}>{name}</h3>
            <h3 className={`text-purple-400 font-semibold`}>{email}</h3>
        </article>
        </Link>
     );
}
 
export default Comment;