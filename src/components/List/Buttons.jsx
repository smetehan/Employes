import "./button.css";
const Buttons = (props) => {
  return (
    <div>
      <button className="btn" value="prev" onClick={props.func}>
        PREV
      </button>
      <button className="btn" value="next" onClick={props.func}>
        NEXT
      </button>
    </div>
  );
};
export default Buttons;
