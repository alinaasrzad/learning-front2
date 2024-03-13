
import { useState } from "react";
import ListGroup from "./components/ListGroup/index";
import './App.css'
import Like from "./components/Like";
import Alert from "./components/Alert";
import { FcLike } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
import Button from "./components/Buttons/Button";
// import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  let items =[ "iran" , "tabriz","ghom","siraz"]
 const [alertVisible , setAlertVisibility] = useState(false)
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
     
      <Like onClick={()=>console.log('clicked ')}/>
    </div> 
  );
}

export default App;
  