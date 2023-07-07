import { useNavigate } from 'react-router-dom';

function Lang() {
     
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
            <div className ='m-5 call text-center'>
                <div class="d-flex justify-content-center">
                    <img src='/assets/img/Flag_of_the_United_States.svg.png' width={'60px'} height={'30px'} className='m-3'/>
                    <h1 >English</h1>
                </div>
                <div class="d-flex justify-content-center">
                    <img src='/assets/img/Flag_of_Egypt.svg.webp' width={'60px'} height={'30px'} className='m-3'/>
                    <h1>Arabic (العربية) - Egypt</h1>
                </div>
            </div>
        </div>

    </>
  );
}

export default Lang;