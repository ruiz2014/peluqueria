import { useState, useEffect, useCallback } from "react";
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'

const URI = 'http://localhost:3003/blogs/'

const CompEditBlog = () =>{

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e)=>{
        e.preventDefault()

        await axios.put(URI+id, {title:title, content:content})
        navigate('/')
    }

    const getBlogById = useCallback( async ()=>{
        const res = await axios.get(URI+id)
        setTitle(res.data.title)
        setContent(res.data.content)
    },[id]) 

    useEffect(() =>{
        getBlogById()
    }, [getBlogById])

    return(
        <div>
           <h2>Edit Post</h2> 
           <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Titulo</label>
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value) } className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Contenido</label>
                    <input type='text' value={content} onChange={(e) => setContent(e.target.value) } className='form-control'/>
                </div>
                <button type='submit' className='btn btn-success'>Guardar</button>
           </form>
        </div>
    )

}

export default CompEditBlog