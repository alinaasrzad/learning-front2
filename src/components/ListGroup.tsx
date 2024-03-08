function ListGroup() {
  let items = ["tehran", "shiraz", "mashhad", "tabriz"];

  //   const message = items.length === 0 ? <p>No item found</p> : null;

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log("clicked")}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  ); 
}
export default ListGroup;
