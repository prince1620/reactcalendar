// import React from 'react';
// import './App.css';


// function App() {
//   return (
//     <div className="app">
      
//       <h1>hi</h1>
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react';
import './App.css';
import Calendar from './components/calendar'

const style ={
  position: "relative",
  margin: "50px auto"
}

class App extends Component {
  render(){
    return(
      <div className="App">
        <Calendar style={style} width="302px" />
      </div>
    );
  }
}

export default App;