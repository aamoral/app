import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Blackboard extends Component{

  state={
    tags:[]
  };

click(event){
  const{ clientX,clientY}=event;
  const target = document.getElementById('blackboard');
  const newtag={x: clientX - target.offsetLeft - 50 , y: clientY - target.offsetTop - 65} ;
  this.state.tags.push(newtag);
  this.setState(this.state);
}

  render() {
    return (
      <div class="blackboard" id="blackboard"  onClick={this.click.bind(this)}>
      {
        this.state.tags.map((element,index)=>{
          return(<Tag key={index} left={element.x} top={element.y}/>);
        })
     }
     </div>   
    )
  }

}
class Tag extends Component{
  render() {
    const{ left,top}=this.props;
    return (
      <div style={{left:`${left}px`,top:`${top}px`}} class="tag">  </div>
    )
  }

}

class App extends Component {
  render() {
    return (
      <div className="App">
      <Blackboard/>
      
      
        </div>
    );
  }
}
export default App;



