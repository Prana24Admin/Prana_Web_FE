import React,{useState} from 'react'
import '../../../assets/css/Home/search.css'
import {useNavigate} from 'react-router-dom';
const SearchBar = () =>{
    const [query, setquery] = useState('')
    const handleChange = (e) => {
    setquery(e.target.value)
    }
    const navigate = useNavigate();
    const navigatePrescription = () => {
        navigate('/prescription');
      };
return (
    <>
        <div className='search' >
            <div className='d-flex flex-row'>
                <div className='d-flex flex-column '>
                    <p className='search-par'>What are you looking for?</p>    
                </div>
                <div className='d-flex flex-column'>
                   
                    <p className='search-par1'>Order with prescription<span className='upload'><a href="#target">UPLOAD NOW</a></span></p>   
                </div>
                
            </div>
            <div className='search-search'>
                <input className="search1" type="search" value={query} onChange={handleChange} placeholder='Search for'/><span className='search-btn'>Search</span>
            </div>
        </div>
    </>
)
}
export default SearchBar