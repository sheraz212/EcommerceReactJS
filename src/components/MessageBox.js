function MessageBox(props) {
  return (
    <div className={`alert alert-${props.varient || "info"}`}>
      {props.children}
    </div>
  );
}
export default MessageBox;
