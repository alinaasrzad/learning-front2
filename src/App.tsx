
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
 const [alertVisible , setAlertVisibilty] = useState(false)
//  const [clickicon , setclickicon] = useState(true)
  return (
    <div>
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
  