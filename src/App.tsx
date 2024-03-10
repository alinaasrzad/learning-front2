import ListGroup from "./components/ListGroup";

function App() {
  let items = ["tehran", "shiraz", "mashhad", "tabriz"];
  const HandleSelectItem = (item:string)=>{
    console.log(item)
  }
  return (
    <div>
      <ListGroup items = {items} heading= "Cities" onSelectItem={HandleSelectItem}/>
    </div>
  );
}
export default App; 
