
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items =[ "iran" , "tabriz","ghom","siraz"]
 const [alertVisible , setAlertVisibilty] = useState(false)
//  const [clickicon , setclickicon] = useState(true)
  return (
    <div>
        <ListGroup items={items} heading="Cities" onSelectItem={function (item: string): void {
        throw new Error("Function not implemented.");
      } }/>
     {alertVisible && <Alert onClose={()=> setAlertVisibilty(false) }> 
        My alert 
        {/* <button className="btn btn-danger flex-xl-row "  onClick={() => setAlertVisibilty(false) }>
           <i>delete </i>
      </button> */}
      </Alert>}
      <Button color="primary"  onClick={() => setAlertVisibilty(true) }>
        click here 
      </Button>  
    
    </div> 
  );
}

export default App;
  