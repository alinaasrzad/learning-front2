
interface Props {
    children : string;
}
const Alert = ( {children}: Props) => {
  return (
   
    <div className="alert alert-info">{children}</div>
  )
} 

export default Alert ;