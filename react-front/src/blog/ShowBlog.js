import { useState, useEffect } from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:3003/blogs/'

const CompShowBlogs = () =>{

    const [blogs, setBlog] = useState([])

    useEffect(()=>{
        getBlogs()
    }, []) 
    
    const getBlogs = async ()=>{
        const result = await axios.get(URI)
        setBlog(result.data)
    }

    const deleteBlog = async (id)=>{
        await axios.delete(`${URI}${id}`)
        getBlogs()
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to='/create' className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>Titulo</th>
                                <th>Contenido</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            { blogs.map((blog)=>(
                                    <tr key={blog.id}>
                                        <td>{blog.title}</td>
                                        <td>{blog.content}</td>
                                        <td>
                                            <Link to={`/edit/${blog.id}`} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
                                            <button className='btn btn-danger' onClick={()=>deleteBlog(blog.id)}><i className="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default CompShowBlogs