const CheckBox = ({onClick, isDone}) => {
  let classes = "btn-icon fa fa-"
  !isDone ? classes += "circle-o" : classes+= "check-circle";

  return (
    <i
      onClick={onClick}
      className={classes}>    
    </i>
  );
}

export default CheckBox;