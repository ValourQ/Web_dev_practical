//create a react application demonstrating the use of context api.
//requirements create a context, provide data from parent component 
// consume data in nested child component.
import Child1 from "./Components/Child1";
import MyContext from "./myStore";

function App() {

  const student = {
    name: "Shreya",
    course:"Btech",
  };

  return (
    <>
      <h1>Parent Component</h1>

      <MyContext.Provider value={student}>
        <Child1 />
      </MyContext.Provider>
    </>
  );
}

export default App;
