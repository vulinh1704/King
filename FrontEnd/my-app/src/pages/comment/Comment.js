import {useEffect, useState} from "react";
import axios from "axios";

export function Comment(props) {
    const idBlog = props.idBlog;
    let userId = localStorage.getItem('userId');
    const [listComment, setListComment] = useState([]);
    const [checkReply, setCheckReply] = useState(-1);
    const [listReply, setListReply] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/comments/' + idBlog).then(data => {
            setListComment(data.data)
            let list = [...listReply];
            data.data.map(item => {
                if (item.externalCommentId !== -1) list.push(item);
            });
            setListReply(list);
        })
    }, [])

    const addComment = (e) => {
        if (e.key === 'Enter') {
            const comment = {
                content: e.target.value,
                blog: {
                    id: idBlog
                },
                user: {
                    id: userId
                }
            }
            axios.post('http://localhost:8080/comments', comment).then(data => {
                axios.get('http://localhost:8080/comments/' + idBlog).then(data => {
                    setListComment(data.data);
                })
            })
        }
    }

    const showReply = (e) => {
        setCheckReply(+e.target.value)
    }
    const saveCommentReply = (e, idComment) => {
        if (e.key === 'Enter') {
            const comment = {
                content: e.target.value,
                blog: {
                    id: idBlog
                },
                user: {
                    id: userId
                },
                externalCommentId: idComment
            }
            axios.post('http://localhost:8080/comments', comment).then(data => {
                axios.get('http://localhost:8080/comments/' + idBlog).then(data => {
                    setListComment(data.data);
                    let list = [];
                    data.data.map(item => {
                        if (item.externalCommentId !== -1) list.push(item);
                    });
                    setListReply(list);
                })
            })
        }
    }
    return (
        <>
            <div className="input-group mb-3" style={{textAlign: 'center'}}>
                <input type="text" className="form-control" placeholder="Cảm nghĩ của bạn 😍"
                       aria-label="Recipient's username" aria-describedby="basic-addon2"
                       style={{borderRadius: "50px"}} onKeyDown={(event) => {
                    addComment(event)
                }}/>
            </div>

            {
                listComment && listComment.map((comment) => (
                    <>
                        { comment.externalCommentId === -1 ?
                            <div className="row">
                                <div className="col-2"><img
                                    style={{width: "40px", height: "40px", borderRadius: "50%", marginTop: "20px"}}
                                    src={comment.user.avatar}/>
                                </div>
                                <div className="col-5">
                                    <div className="row">{comment.user.username}</div>
                                    <div className="row shadow p-3 mb-2 bg-white rounded"
                                         style={{width: "400px"}}>{comment.content}
                                        <button style={{
                                            marginLeft: "80%",
                                            marginTop: '-5px',
                                            backgroundColor: "white",
                                            border: "none",
                                            fontSize: "13px"
                                        }} value={comment.id} onClick={event => {
                                            showReply(event)
                                        }}>Trả lời
                                        </button>
                                    </div>
                                    {
                                        listReply.length !== 0 && listReply.map(commentReply => {
                                            if (commentReply.externalCommentId === comment.id) {
                                                return(
                                                <>
                                                    <div className="row">
                                                        <div className="col-2"><img
                                                            style={{width: "40px", height: "40px", borderRadius: "50%", marginTop: "20px"}}
                                                            src={commentReply.user.avatar}/>
                                                        </div>
                                                        <div className="col-4 ml-4">
                                                            <div className="row">{commentReply.user.username}</div>
                                                            <div className="row shadow p-3 mb-2 bg-white rounded"
                                                                 style={{width: "400px"}}>{commentReply.content} </div>
                                                        </div>

                                                    </div>
                                                </>
                                                )
                                            } else {
                                                return <></>
                                            }

                                        })
                                    }

                                    <div className="row mb-3">
                                        {
                                            checkReply === comment.id ?
                                                <input type="text" placeholder={'Trả lời'} onKeyDown={(event) => {
                                                    saveCommentReply(event, comment.id)
                                                }}/> : <></>
                                        }
                                    </div>
                                </div>
                            </div> : <></>
                        }

                    </>
                ))
            }

        </>
    )
}