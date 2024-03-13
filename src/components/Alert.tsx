import { Children, ReactNode } from "react";
import { useState } from "react";
interface Props {
    children : ReactNode;
    onClose :()=>void; 
}
const Alert = ( {children ,onClose}: Props) => {
    const [alertVisible , setAlertVisibilty] = useState(false)
  return (
   
    // <div className="alert alert-danger">  <strong>Holy guacamole!</strong>
    //  <button type="button" className="btn-close primary mx-104" data-bs-dismiss="alert" aria-label="Close"  onClick= {onClose}></button>
    //  </div>
     <div className="alert alert-info alert-dismissible fade show" role="alert">{children} 
     <strong>Holy guacamole!</strong> You should check in on some of those fields below.
     <button type="button" className="btn-close " data-bs-dismiss="alert" aria-label="Close"  onClick= {onClose}></button>
   </div>
  )
} 

export default Alert ;