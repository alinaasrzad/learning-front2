
function ListGroup() {
    const items = [
        'tehran',
        'shiraz',
        'mashhad',
        'tabriz'

    ];
   
  return (

    <ul className="list-group">

   { items.map(item => <li>{item} </li>)}
    </ul>
 
  );
}
export default ListGroup;
