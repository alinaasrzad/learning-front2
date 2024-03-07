
function ListGroup() {
    const items = [
        'tehran',
        'shiraz',
        'mashhad',
        'tabriz'

    ];
   
  return (

    <ul className="list-group">
     <h1>List Group</h1>
   { items.map(item => <li>{item}</li>)}
    </ul>
 
  );
}
export default ListGroup;
