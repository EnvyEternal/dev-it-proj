import React, { useState } from 'react'
import './Searchstyle.css'
function Search(props) {
    const {searchPhrase} = props

    const [data, setData] = useState('')

      const handleChange = (e) => {
        const value = e.target.value;
        setData(value);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const adminData = data
        searchPhrase(adminData)
      };

      const reset = () =>{
        setData('')
        searchPhrase('')
    } 

   
  return (
    <>
    <form onSubmit={handleSubmit} >
        <div className='search-container'>
            <div>
                Search news
            </div>
                <label>
                    <input
                        type="text"
                        className='search'
                        value={data}
                        onChange={handleChange}
                      />
                </label>
            <button type="submit" className='button-search'>Search</button>
            <button onClick={reset} className='button-search'>Reset</button>
        </div>
    </form>
    </>
  )
}

export default Search
