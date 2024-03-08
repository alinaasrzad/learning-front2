
function ListGroup() {
    const items = [
        'tehran',
        'shiraz',
        'mashhad',
        'tabriz'

    ];
   
  return (

    <ul className="list-group m-4 my-3">
     <h1 className="">List Group</h1>
   { items.map(item => <ul >{item}</ul>)}
    </ul>
 
  );
}
export default ListGroup;
