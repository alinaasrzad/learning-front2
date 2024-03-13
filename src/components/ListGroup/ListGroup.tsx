// import { MouseEvent } from "react";
// {item: [] , heading :string }
import styles from "./ListGroup.module.css";
import styled from "styled-components";
import { useState } from "react";
const List = styled.ul`
  list-style: none;
  padding: 0;
`;
interface ListItemProps {
  active: boolean;
}
const ListItem = styled.li<ListItemProps>`
  list-style: none;
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue ":"none")};
`;

interface Props {
  items: string[];
  heading: string;
  // (item :string)=> void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // call a hook (feater in react)
  const [Selectedindex, setSelectedindex] = useState(0);
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
      <List className={[styles.ListGroup, styles.container].join("  ")}>
        {items.map((item, index) => (
          <ListItem
            active={index === Selectedindex}
            key={item}
            onClick={() => {
              setSelectedindex(index);
              onSelectItem(item);
             
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </> 
  );
}
export default ListGroup;
