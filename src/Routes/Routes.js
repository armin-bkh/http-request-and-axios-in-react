import FullComment from "../Pages/FullComment/FullComment"
import HomePage from "../Pages/HomePage"
import NewComment from "../Pages/NewComment/NewComment"
import NotFound from '../Pages/NotFound';

const routes = [
    {path: "/", component: HomePage, exact: true},
    {path: "/new-comment", component: NewComment},
    {path: "/comments/:id", component: FullComment},
    {path: "*", component: NotFound}
]

export default routes