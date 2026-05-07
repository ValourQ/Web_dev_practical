import { useContext } from "react";
import MyContext from "../myStore";

function Child2() {

  const data = useContext(MyContext);

  return (
    <>
      <h2> Child 2 Component</h2>
      <h3>Name : {data.name}</h3>
      <h3>Course : {data.course}</h3>
    </>
  );
}

export default Child2;
