
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [tab,setTab]=useState("Tab 1");
  return (
    <div>
        {/* Do not remove the main div */}

        <ul>
          <li><span onClick={()=>{setTab("Tab 1")}}>Tab 1</span></li>
          <li><span onClick={()=>{setTab("Tab 2")}}>Tab 2</span></li>
          <li><span onClick={()=>{setTab("Tab 3")}}>Tab 3</span></li>
        </ul>

        <div>
          This is the content for {tab}
        </div>
    </div>
  )
}

export default App
