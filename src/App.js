import SingleQuestion from "./components/Question";
import data from "./components/Database";
// import { useState } from "react";

function App() {

  // const [questions, setQuestions] = useState(data);

  // console.log(questions);

  return (
    <>

      {/* <div className="container">
        <h3>سوالی برایتان پیش آمده؟</h3>
        <div className="info">
          <SingleQuestion />
        </div>
      </div> */}


      <div className="container">
        <h3>سوالی برایتان پیش آمده؟</h3>
        <div className="info">

          {/* {
            questions.map((question) => {
              return <SingleQuestion {...question} />
            })
          } */}


          {/* {
            questions.map((question) => {
              return <SingleQuestion key={question.id} {...question} />
            })
          } */}


          {
            // questions.map((question, index) => {
            data.map((question, index) => {
              return <SingleQuestion key={index} {...question} />
            })
          }

        </div>
      </div>

    </>
  );
}

export default App;
