
import React, {useState} from "react";

import Home from "./components/Home";
function App() {

    const [count2,setCount2]=useState(0);
    let handleCounters=()=>{


        let test=count2+1
        setCount2(test);

        console.log("count2 +", count2);
    //     ultima valoare

    }


  return (
    // <div >
    //      <button onClick={handleCounters}>Click</button>
    //      <p >Count2:{count2}</p>
    //
    //     {
    //          count2>2&&(
    //               <p>Count 2 este mai  mare decat 2</p>
    //         )
    //     }
    //
    //     {
    //     count2>10&&(
    //         console.log("count 2 este mai mare decat 10")
    //
    //     )
    //     }
    // </div>
      <Home/>
  );


}

export default App;
