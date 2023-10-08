import React,{useState} from 'react'
import '../../../assets/css/Home/search.css'
const InnerSearchBar = () =>{
    const [query, setquery] = useState('')
    const handleChange = (e) => {
    setquery(e.target.value)
    }
return (
    <>
        <div className='search'>
            <div className='search-search'>
                <input className="search1" type="search" value={query} onChange={handleChange} placeholder='Search for'/><span className='search-btn'>Search</span>
            </div>
        </div>
    </>
)
}
export default InnerSearchBar