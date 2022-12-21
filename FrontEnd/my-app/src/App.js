import AddBlog from "./pages/blogs/AddBlog";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/blogs/Home";
import ListBlog from "./pages/blogs/ListBlog";

function App() {
    return (
        <>
            <Routes>
                <Route path={'home'} element={<Home/>}>
                    <Route path={''} element={<ListBlog/>}/>
                    <Route path={'add-blog'} element={<AddBlog/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
