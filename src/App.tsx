
import { useState } from "react";
import ListGroup from "./components/ListGroup/index";
import './App.css'
import Alert from "./components/Alert";
import Button from "./components/Button";
// import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  let items =[ "iran" , "tabriz","ghom","siraz"]
 const [alertVisible , setAlertVisibili ty] = useState(false)
//  const [clickicon , setclickicon] = useState(true)
  return (
    <div>
        <ListGroup items={items} heading="Cities" onSelectItem={function (item: string): void {
        throw new Error("Function not implemented.");
      } }/>
     {alertVisible && <Alert onClose={()=> setAlertVisibility(false) }> 
        My alert 
        {/* <button className="btn btn-danger flex-xl-row "  onClick={() => setAlertVisibilty(false) }>
           <i>delete </i>
      </button> */}
      </Alert>}
      <Button color="primary"  onClick={() => setAlertVisibility(true) }>
        click here 
      </Button>  
    
    </div> 
  );
}

export default App;
  