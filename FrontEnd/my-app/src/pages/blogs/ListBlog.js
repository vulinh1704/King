import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBlogs} from "../../services/blogService";
import LikeBlog from "./LikeBlog";
import {Link} from "react-router-dom";
import {uploadBytes} from "firebase/storage";

function ListBlog() {
    const blogs = useSelector(({blogs}) => {
        return blogs.blogs;
    });
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlogs());
    }, [])

    return (
        <>  {
            blogs.length !== 0 && blogs.map(blog => (
                <div className="row" style={{marginTop: "15px"}}>
                    <div className="col-3"/>
                    <div className="col-6 shadow-lg p-3 mb-5 bg-white rounded">
                        <div className="row">
                            <div className="col-2" style={{textAlign: "right"}}>
                                <img src={blog.user.avatar}
                                     style={{borderRadius: "50%", width: "50px", height: "50px",}}/>
                            </div>
                            <div className="col-10">
                                <div className="row">
                                    <p>{blog.user.username}</p>
                                </div>
                                <div className="row" style={{marginTop: "-10px"}}>
                                    <p style={{fontSize: "13px"}}>{new Date(blog.createTime).toLocaleString("en-US", {timeZone: "Asia/Jakarta"})}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{marginTop: "5px"}}>
                            <div className="col-12" style={{marginLeft: "60px"}}>
                                <p>
                                    {blog.title}
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12" style={{textAlign: "center"}}>
                                <Link to={`/home/${blog.id}`}><img src={blog.image}
                                     alt="" width={"660px"} height={"495px"}/></Link>
                            </div>
                        </div>
                        <div className="row" style={{textAlign: 'center', marginTop: '15px'}}>
                            <div className="col-6">
                                <LikeBlog idUser={localStorage.getItem('userId')} idBlog={blog.id}/>
                            </div>
                            <div className="col-6">
                                <button type="button" style={{width: "100%", border: "none", backgroundColor: 'white'}}>
                                    <i className="fa-regular fa-comment"/> B??nh lu???n
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3"/>
                </div>
            ))
        }
        </>
    )
}

export default ListBlog;