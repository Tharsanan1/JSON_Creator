import React from 'react';
import Servers from './components/Servers'

let parentJson = 
{
  name : "Name",
  value : ["Names", "Address"],
  default : "Fill"
};
function App() {
  return (
    <div style={{margin:"20px"}}><Servers/></div>
  );
}

export default App;
