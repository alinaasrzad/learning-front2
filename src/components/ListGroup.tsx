function ListGroup() {
  let items = ["tehran", "shiraz", "mashhad", "tabriz"];
   const handleClcik = (event) => console.log(event)
  //   const message = items.length === 0 ? <p>No item found</p> : null;

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item }
            onClick={ }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  ); 
}
export default ListGroup;
