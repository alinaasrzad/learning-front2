import { useState } from "react";
import ListGroup from "./components/ListGroup/index";
// import "./App.css";
import Message from "./message";

import Like from "./components/Like";
import Alert from "./components/Alert";

import Button from "./components/Buttons/Button";
// import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  //[false,true]
  let items = ["iran", "tabriz", "ghom", "siraz"];
  
  const [isVisble, setVisibility] = useState(false);
 
  const [isApproved, setApproved] = useState(true);
  const [alertVisible, setAlertVisibility] = useState(false);
  const handleClick = () => {
    setVisibility(true);
    
    //setname('alin')
    console.log(isVisble,  "CLECKED");
  };
  //  const [clickicon , setclickicon] = useState(true)
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={function (item: string): void {
          throw new Error("Function not implemented.");
        }}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          My alert
          {/* <button className="btn btn-danger flex-xl-row "  onClick={() => setAlertVisibilty(false) }>
           <i>delete </i>
      </button> */}
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        click here
      </Button>

      <Like onClick={() => console.log("clicked ")} />
      <button className="btn btn-danger m-4" onClick={handleClick}>show</button>
      <Message/>
      <Message/>
      <Message/>
    </div>
  );
}

export default App;
