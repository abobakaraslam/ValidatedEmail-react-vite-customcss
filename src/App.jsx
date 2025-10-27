/*File: App.jsx located in RootFolder/src/      */
import { useState } from "react";
import { sanitizeInput } from "./utils/sanitizeInput";
import { regEmailTest } from "./utils/regEmailTest";

function App() {
  //States for errors
  const [errorEmailState, setErrorEmailState] = useState("");

  //initialize states for all input fields
  const [InputData, setInputData] = useState({
    regEmail: ""
  });
  //function to update values of states when user types
  const onChangeInputData = (event) => {
    setInputData({ ...InputData, [event.target.name]: event.target.value });
  };

  //When form is submitted
  const handleForm = (event)=>{
    event.preventDefault(); //avoid page loading when form is submitted
    console.log("button submitted")
    
    let regEmail_get = InputData.regEmail;
    regEmail_get = sanitizeInput(regEmail_get);//sanitization
    if(regEmailTest(regEmail_get) === 0) setErrorEmailState("Please enter email in valid email-format")//email formate checking
    console.log("Email entered by User: ",regEmail_get);
  }
  
  return <div>
    <form onSubmit={handleForm}>
      {errorEmailState && (
        <p style={{color: "red"}}>{errorEmailState}</p>
      )}
      <input type="email" name="regEmail" id="regEmail" value={InputData.regEmail} onChange={onChangeInputData} placeholder="Email here" />
      <button type="submit">Submit</button>
    </form>
  </div>
}
export default App;