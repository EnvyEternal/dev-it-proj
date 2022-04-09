import React,{useState} from 'react'
import { createPost } from '../../api/index.js';

function CreatePost() {
    const [data, setData] = useState({
        title: "",
        categories: [''],
        contentSnippet: "",
        img: "",
        link: "",
        creator: ""
      })
    //const [cookies, setCookie] = useCookies();

      const handleChange = (e) => {
        const value = e.target.value;
        setData({
          ...data,
          [e.target.name]: value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const Data = {
            creator: data.creator,
            title: data.title,
            link: data.link,
            contentSnippet: data.contentSnippet,
            categories: [data.categories],
            img: data.img,
        };
        console.log(Data)
        createPost(Data)
      };

  return (
    <>
    <div className='edit-form-back'>
            <div className='edit-form'>
            <div>Creating post</div>
              <form onSubmit={handleSubmit}>
                <label className='edit'>
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    required 
                    value={data.title}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="categories"
                    placeholder="Categories"
                    required 
                    value={data.categories}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="contentSnippet"
                    placeholder="Content"
                    required 
                    value={data.contentSnippet}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="img"
                    placeholder="img-link"
                    required 
                    value={data.img}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="link"
                    placeholder="link-news"
                    required 
                    value={data.link}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="creator"
                    placeholder="Author"
                    required 
                    value={data.creator}
                    onChange={handleChange}
                  />
                </label>
              <button type="submit" className='button-edit'>Save</button>
            </form>
            </div>
        </div>
    </>
  )
}

export default CreatePost