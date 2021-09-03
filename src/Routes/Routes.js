import FullComment from "../Components/FullComment/FullComment"
import HomePage from "../Pages/HomePage"
import NewCommentPage from "../Pages/NewCommentPage"

const routes = [
    {path: "/", component: HomePage, exact: true},
    {path: "/new-comment", component: NewCommentPage},
    {path: "/comments/:id", component: FullComment}
]

export default routes