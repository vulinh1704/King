import AddBlog from "./pages/blogs/AddBlog";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/blogs/Home";

function App() {

    return (
        <>
            <Routes>
                {/*<Route path={''} element={}/>*/}
                <Route path={'home'} element={<Home/>}>
                    <Route path={'add-blog'} element={<AddBlog/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
