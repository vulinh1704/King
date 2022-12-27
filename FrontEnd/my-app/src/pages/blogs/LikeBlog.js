import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addLike, getLike} from "../../services/likeService";
import axios from "axios";
import './LikeBlog.css';

function LikeBlog(props) {
    const [currentLike, setCurrentLike] = useState([]);
    const [likeCount, setLikeCount] = useState(0);
    const [listLikes, setListLike] = useState([])
    const dispatch = useDispatch();
    const idUser = props.idUser;
    const idBlog = props.idBlog;
    const data = {
        idUser: idUser,
        idBlog: idBlog
    }

    const like = async () => {
        const like = {
            blog: {
                id: idBlog
            },
            userId: idUser
        }
        await dispatch(addLike(like))
        await axios.post('http://localhost:8080/likes/idUser/idBlog', data).then(like => {
            setCurrentLike(like.data);
        })
        await axios.get('http://localhost:8080/likes/' + idBlog).then(likes => {
            setLikeCount(likes.data.length);
        })
    }

    const dislike = async (id) => {
        axios.delete('http://localhost:8080/likes/' + id).then(async () => {
            await axios.post('http://localhost:8080/likes/idUser/idBlog', data).then(like => {
                setCurrentLike(like.data);
            })
            await axios.get('http://localhost:8080/likes/' + idBlog).then(likes => {
                setLikeCount(likes.data.length);
            })
            await axios.get('http://localhost:8080/likes/users/' + idBlog).then(likes => {
                setListLike(likes.data)
            })
        })
    }
    useEffect(() => {
        axios.post('http://localhost:8080/likes/idUser/idBlog', data).then(like => {
            setCurrentLike(like.data);
        })
        axios.get('http://localhost:8080/likes/' + idBlog).then(likes => {
            setLikeCount(likes.data.length);
        })
        axios.get('http://localhost:8080/likes/users/' + idBlog).then(likes => {
            setListLike(likes.data)
        })
    }, [])
    let showLike = ''
    if (listLikes.length === 1 || listLikes.length === 2) {
        listLikes.map(item => {
            showLike += item.username + '\n'
        })
    } else if (listLikes.length > 2) {
        showLike = listLikes[0].username + ' , ' + listLikes[1].username + ' và ' + (listLikes.length - 2) + ' người khác'
    }
    return (
        <>
            {
                currentLike !== undefined ?
                    currentLike.length > 0 ?
                        <div className="container">
                            <a data-toggle="tooltip" title={showLike}>
                                <button type="button" style={{
                                    width: "100%",
                                    border: "none",
                                    backgroundColor: 'white',
                                    color: '#F77CBA'
                                }}
                                        onClick={() => dislike(currentLike[0].id)}
                                >
                                    <i className="fa-solid fa-heart"/> Thích ({likeCount})
                                </button>
                            </a>
                        </div>
                        :
                        <>
                            <button type="button" style={{
                                width: "100%",
                                border: "none",
                                backgroundColor: 'white'
                            }}
                                    onClick={like}
                            >
                                <i className="fa-regular fa-heart"/> Thích ({likeCount})
                            </button>
                        </>
                    : <></>
            }
        </>
    )
}

export default LikeBlog;