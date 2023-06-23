import { useNavigate } from 'react-router-dom';

function Call() {
     
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
            <div className ='m-5 d-flex flex-row justify-content-center call'>
                <i className="bi bi-telephone-fill "></i>
                <h1 className='p-2'> 01123456789 - Alef Maxim Mall</h1>
            </div>
        </div>

    </>
  );
}

export default Call;