import React, {useEffect, useRef, useState} from 'react';
import {Editor} from '@tinymce/tinymce-react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../../services/categoryService";
import {getDownloadURL, listAll, ref, uploadBytes} from "firebase/storage";
import {storage} from "../../config/firebase";
import {v4} from "uuid";
import {addBlog} from "../../services/blogService";

function AddBlog() {
    const editorRef = useRef(null);
    const categories = useSelector(({categories}) => {
        return categories.categories;
    })
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, [])

    //upload file
    const [imageUpload, setImageUpload] = useState();
    const [imageList, setImageList] = useState([]);
    const imageListRef = ref(storage, "images/")
    const uploadImage = (values) => {
        if (imageUpload === null) {
            return;
        }
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
        uploadBytes(imageRef, imageUpload).then((snaphsot) => {
            getDownloadURL(snaphsot.ref).then((url) => {
                const blog = {...values , image : url};
                blog.categories = [];
                values.categories.map(category => {
                    blog.categories.push({id : category})
                })
                dispatch(addBlog(blog));
            })
        })
    }
    useEffect(() => {
        listAll(imageListRef).then((response) => {
            uploadImage();
            response.items.forEach((item) => {
                getDownloadURL(item).then(url => {
                    setImageList(prev => [...prev, url]);
                })
            })
        })
    }, [])
    return (
        <>
            <div className="row">
                <div className="col-3"/>
                <div className="col-6">
                    <h4 className="h4" style={{textAlign: "center"}}>
                        Tạo bài viết
                    </h4>
                    <Formik
                        initialValues={{}}
                        onSubmit={async (values) => {
                            if (editorRef.current) {
                                values = {...values, description: editorRef.current.getContent()}
                                uploadImage(values)
                            }
                        }}
                    >
                        <Form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Tiêu đề</label>
                                <Field type="text" className="form-control" name={'title'}
                                       aria-describedby="emailHelp"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Ảnh bìa</label>
                                <input type="file" className="form-control" id="exampleInputPassword1"
                                       onChange={event => {
                                           setImageUpload(event.target.files[0])
                                       }}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Trạng thái</label>
                                <Field as={'select'} name={'status'} className="custom-select" id="inputGroupSelect02">
                                    <option selected>Chọn...</option>
                                    <option value="1">Chỉ mình tôi</option>
                                    <option value="2">Tất cả mọi người</option>
                                    <option value="3">Bạn bè</option>
                                </Field>
                            </div>
                            <div className="form-group">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Mô tả</label>
                                    <Editor
                                        onInit={(evt, editor) => {
                                            editorRef.current = editor
                                        }}
                                        initialValue="<p>Ngày hôm nay của bạn thế nào ?</p>"
                                        init={{
                                            height: 500,
                                            menubar: false,
                                            plugins: [
                                                'advlist autolink lists link image charmap print preview anchor',
                                                'searchreplace visualblocks code fullscreen',
                                                'insertdatetime media table paste code help wordcount'
                                            ],
                                            toolbar: 'undo redo | formatselect | ' +
                                                'bold italic backcolor | alignleft aligncenter ' +
                                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                                'removeformat | help',
                                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                        }}
                                    />
                                </div>
                                <div role="group" aria-labelledby="checkbox-group">
                                    {

                                        categories.map(category => (
                                            <div className="form-check form-check-inline">
                                                <Field className="form-check-input" type="checkbox" name='categories'
                                                       value={category.id + ''}/>
                                                <label className="form-check-label"
                                                       htmlFor="inlineCheckbox1">{category.name}</label>
                                            </div>
                                        ))

                                    }
                                </div>
                            </div>
                            <button type="submit" className="btn btn-info"
                                    style={{marginLeft: "27%", width: '50%'}}>Đăng bài
                            </button>
                        </Form>
                    </Formik>
                </div>
                <div className="col-3"/>
            </div>
        </>
    )
}

export default AddBlog;