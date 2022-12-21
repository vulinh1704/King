import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes} from "react-router-dom";
import Register from "./pages/register/Register";
import ShowPublic from "./pages/blogs/ShowPublic";



function App() {
    return (

    <Routes>
      <Route path={''} element={<ShowPublic/>}> </Route>
    </Routes>

    );
}

export default App;