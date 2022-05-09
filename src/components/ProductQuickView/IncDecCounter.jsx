import { useState } from "react";
function IncDecCounter() {
  let [num, setNum] = useState(0);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  }
  let handleChange = (e) => {
    setNum(e.target.value);
  }
  return (
    <>
      <div className="input-group">
        <div className="input-group-prepend">
          <button className="btn btn-outline-dark" type="button" onClick={decNum}>-</button>
        </div>
        <input type="text" className="form-control" value={num} onChange={handleChange} />
        <div className="input-group-prepend">
          <button className="btn btn-outline-dark" type="button" onClick={incNum}>+</button>
        </div>
      </div>
    </>
  );
}
export default IncDecCounter;