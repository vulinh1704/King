import AddBlog from "./pages/blogs/AddBlog";
import {Route, Routes, Navigate} from "react-router-dom";
import Home from "./pages/blogs/Home";
import ListBlog from "./pages/blogs/ListBlog";
import {BlogDetail} from "./pages/blogs/BlogDetail";
import Register from "./pages/register/Register";
import {Login} from "./pages/login/Login";
import {useSelector} from "react-redux";
import {ListBlogUser} from "./pages/blogs/ListBlogUser";

function App() {
    const currentUser = useSelector(state => {
        return state.users.currentUser == null ? {} : state.users.currentUser
    });
    return (
        <>
            <Routes>
                <Route path={'register'} element={<Register/>}/>
                <Route path={'login'} element={<Login/>}/>
                {
                    currentUser.username !== undefined ?
                        <Route path={'home'} element={<Home/>}>
                            <Route path={''} element={<ListBlog/>}/>
                            <Route path={'add-blog'} element={<AddBlog/>}/>
                            <Route path={':idBlog'} element={<BlogDetail/>}/>
                            <Route path={'my-blog'} element={<ListBlogUser/>}/>
                        </Route>
                        :
                        <Route
                            path="*"
                            element={<Navigate to="/login"/>}
                        />
                }

            </Routes>
        </>
    );
}

export default App;
