import { useNavigate } from 'react-router-dom';
import './../overlay.css';

function Search() {
     
    const navigate = useNavigate() 
    const handelGoBack = () => {
        navigate(-1);
    };


  return (
    <>
        <div id="overlay">
            <button className='close d-flex justify-content-end'>
                <i className ="bi bi-x-circle p-3" id ="closeBtn" onClick={handelGoBack}></i>
            </button>
            <div className ='m-5 d-flex flex-row'>
                <input className="form-control form-control-lg rounded-start" type="text" placeholder="Search" aria-label=".form-control-lg example"/>
                <button id='searchBtn' className='rounded-end'><i className ="bi bi-search"></i></button>
            </div>
        </div>

    </>
  );
}

export default Search;



