type propdata =  {
  id:number,
  url:string
}
const DesktopCard = (props:propdata) =>{
  return(
    <div>{props.id}</div>
  )
}
export default DesktopCard;
