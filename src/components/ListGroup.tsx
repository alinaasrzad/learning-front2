// import { MouseEvent } from "react";


function ListGroup() {
  let items = ["tehran", "shiraz", "mashhad", "tabriz"];
 let selectedindex = 0;

  //Event handler 
//     
  //   const message = items.length === 0 ? <p>No item found</p> : null;

  return (
//     <>
//       <h1>List</h1>
//       {items.length === 0 && <p>No item found</p>}
//       <ul className="list-group">
//         {items.map((item, index) => (
//           <li  
//             className="list-group-item"
//             key={item }
//             onClick={ handleClcik}
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   ); 
// }
<>
<h1>List</h1>
{items.length === 0 && <p>No item found</p>}
<ul className="list-group">
  {items.map((item, index) => (
    <li  
      className={selectedindex === index ? 'list-group-item active ': 'list-group-item' }
      key={item }
      onClick={ () => {selectedindex = index;}}
    >
      {item}
    </li>
  ))}
</ul>
</>
); 
}
export default ListGroup;
