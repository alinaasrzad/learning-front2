function ListGroup() {
  let items = ["tehran", "shiraz", "mashhad", "tabriz"];
  items = [];
//   const message = items.length === 0 ? <p>No item found</p> : null;

  const getMessage = ()=>{
  return items.length === 0 ? <p>No item found</p> : null;
  }
  return (
    <>
      <h1>List</h1>
      {getMessage( )}
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
