import ListGroup from "./components/ListGroup";

function App() {
  let items = ["tehran", "shiraz", "mashhad", "tabriz"];
  return (
    <div>
      <ListGroup items = {items} heading= "Cities" />
    </div>
  );
}
export default App;
