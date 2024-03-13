
import { useState } from "react";
import ListGroup from "./components/ListGroup/index";
import './App.css'
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
      <FcLike  size="40" onClick ={()=> console.log('clicked') } ></  FcLike >
      <CiHeart size="40" />
    </div> 
  );
}

export default App;
  