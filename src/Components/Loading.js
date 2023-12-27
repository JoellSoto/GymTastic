import lg from "./Imagens/GYMTASTIC.png";
import ReactLoading from "react-loading";


export default function Load(){


 

        return (
        <div className='bg-image'>
          
          <div className='mask' >
            <div className='d-flex justify-content-center align-items-center h-100'>
                <ReactLoading
                type={"bars"}
                color={"#b721ff"}
                height={"0 auto"}
                width={100}
                /> 
            </div>
          </div>
        </div>
      );
    }
