import {useNavigate, useParams} from "react-router-dom";
import LikeBlog from "./LikeBlog";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBlog} from "../../services/blogService";
import {Comment} from "../comment/Comment";

export function BlogDetail() {
    let {idBlog} = useParams();
    let userId = localStorage.getItem('userId');
    const dispatch = useDispatch();
    const currentBlog = useSelector(({blogs}) => {
        return blogs.currentBlog;
    })
    useEffect(() => {
        dispatch(getBlog(idBlog));
    }, [])
    return (
        <>
            {
                currentBlog != null ?
                    <div className="row mt-5">
                        <div className="col-6">
                            <div className="row shadow p-3 mb-5 bg-white rounded" style={{height: '90vh'}}>
                                <div className="col-2"/>
                                <div className="col-8" style={{textAlign: 'center'}}>
                                    <img
                                        src={currentBlog.image}
                                        alt="" width={'100%'} height={'100%'}/>
                                </div>
                                <div className="col-2"/>
                            </div>
                        </div>
                        <div className="col-5" style={{marginLeft: '50px'}}>
                            <div className="row">
                                <div className="col-2">
                                    <img
                                        src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/320987830_1683358085399359_6733242390688967839_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=0OcCfAzuIVkAX-nU6Zj&_nc_ht=scontent.fhan2-5.fna&oh=00_AfBv5QIIarhn270qf7H02vXjWkQcqe2ouGBqJ3foArBluw&oe=63A8D84F"
                                        alt=""
                                        width={'50px'} height={'50px'} style={{borderRadius: '50%'}}/>
                                </div>
                                <div className="col-10">
                                    <div className="row">
                                        <p>{currentBlog.user.username}</p>
                                    </div>
                                    <div className="row" style={{marginTop: "-10px"}}>
                                        <p style={{fontSize: "13px"}}>{new Date(currentBlog.createTime).toLocaleString("en-US", {timeZone: "Asia/Jakarta"})}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <p>{currentBlog.title}</p>
                            </div>
                            <div className="row shadow p-3 mb-5 bg-white rounded" id={'description'}>
                                {document.getElementById('description') !== null ? document.getElementById('description').innerHTML = currentBlog.description : console.log(1)}
                            </div>
                            <div className="row" style={{marginTop: "20px"}}>
                                <div className="col-12">
                                    <LikeBlog idUser={userId} idBlog={idBlog}/>
                                </div>
                            </div>
                            <div className="row mt-4">
                               <Comment idBlog={idBlog}/>
                            </div>
                        </div>
                    </div>
                    : <></>
            }

        </>
    )
}