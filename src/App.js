import React, {Component} from 'react'
// import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';


class App extends Component{
  render(){
  return (
    <div className="App">
      <Counter/>

      {/* <Message/> */}
      {/* <Greet name = 'Gal Gadot' heroName= 'Wonder Woman' children=' i am a child'>
        <p>
           This is children props
        </p>
        </Greet> 
      <Greet name = 'Henry Cavill' heroName= 'Superman' children=' i am a child'>
        <button>Action</button>
      </Greet>
      <Greet name = 'Tom Holland' heroName= 'Spiderman' children=' i am a child' />


      <Welcome name = 'Gal Gadot' heroName= 'Wonder Woman' />
      <Welcome name = 'Henry Cavill' heroName= 'Superman' children=' i am a child'/>
      <Welcome name = 'Tom Holland' heroName= 'Spiderman' children=' i am a child'/>
      <Hello/> */}
    </div>
  );
}
}

export default App;
 