import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


// function Question(){
// function Question(props){
function Question({title, info}){

    const [showInfo, setShowInfo] = useState(false);

    return (
        <>
            <div className="question">
               <header>
                    {/* <h4>این سوال اول است</h4> */}
                    {/* <h4>{props.title}</h4> */}
                    <h4>{title}</h4>
                    <button onClick={() => setShowInfo(!showInfo)}>
                        {
                            showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />
                        }
                    </button>
               </header>
              {
                // showInfo &&  <p>این محتوا است</p>
                // showInfo && <p>{props.info}</p>
                showInfo && <p>{info}</p>
              }
            </div>
        </>
    );
}

export default Question;
