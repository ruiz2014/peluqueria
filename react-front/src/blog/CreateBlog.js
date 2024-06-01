import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:3003/blogs/'

const CompCreateBlogs = ()=>{
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    const store = async (e)=>{
        e.preventDefault()

        await axios.post(URI, {title:title, content:content})
        navigate('/')
    }

    return(
        <div>
           <h2>Crear Post</h2> 
           <form onSubmit={store}>
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

export default CompCreateBlogs