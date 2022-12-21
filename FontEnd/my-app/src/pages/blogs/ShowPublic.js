import './css/blogs.css'
import {useEffect, useState} from "react";
import axios from "axios";


 export default function ShowPublic(){
    const [list,setList] = useState([])
     useEffect(()=>{
         axios.get('http://localhost:8080/blogs/status/1').then(
             response =>  {
                 setList(response.data)

             }
         )
     },[])
    return(
        <>
            { list.map((item)=>(
            <div className="App">
                <div className="row" style={{marginTop: '10px'}}>
                    <div className="col-12">
                        <div className="col-4 offset-4">
                            <div className="container-main">
                                {/*header*/}

                                    <div className="main-header">
                                        <div className="row offset-1">
                                            <div>
                                                <a to={'#'}>
                                                    <img
                                                        src="{item.image}"
                                                        alt="my avatar" className="avatar"/>
                                                </a>
                                            </div>
                                            <div>
                                                <a to={'#'}>
                                                    <p className="nick-name">{item.title} </p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="title">
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )) }

                                {/*mid*/}
                                    <div className="main-middle">
                                    <div>
                                    <div className="row">
                                    <div className="col-12">
                                    <img
                                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                                    alt="" className="main-image"/>
                                    <hr className={'main-line'}/>
                                    </div>
                                    </div>
                                    </div>
                                    </div>

                                {/*bottom*/}
                                <div className="main-bottom">
                                    <div className="row">
                                        <div className="col-5 offset-1">
                                            <div className="emotion">
                                                <p >Thích {item.likes}</p>
                                            </div>
                                        </div>
                                        <div className="col-5">
                                            <div className="comment">
                                                <p >Bình luận {item.comments}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
                ))}
        </>
    )
}

