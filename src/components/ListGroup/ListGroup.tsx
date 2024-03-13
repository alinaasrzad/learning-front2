// import { MouseEvent } from "react";
// {item: [] , heading :string } 
 import styles from  './ListGroup.module.css';
import { useState } from "react";
interface Props {
    items : string [];
    heading :string; 
    // (item :string)=> void
    onSelectItem :(item:string)=>void;
}

function ListGroup({items , heading,onSelectItem }:Props) {
   

  // call a hook (feater in react)
  const [Selectedindex, setSelectedindex] = useState(-1);
  //  const [name,setName] = useState('');

  //Event handler
  //
  //const message = items.length === 0 ? <p>No item found</p> : null;

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
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className={[styles.ListGroup,styles.container].join('  ')}>
        {items.map((item, index) => (
          <li
            className={
              Selectedindex === index
                ? "list-group-item active "
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedindex(index);
              onSelectItem(item)
              console.log();
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
} 
export default ListGroup;
