import React from 'react'

class App extends React.Component{
  state={
    subjectName:"ReactJs",
    Year:2023,
    std=[
      {name:"std1",age:18,gender:"female"}
      {name:"std2",age:19,gender:"female"}
      {name:"std3",age:20,gender:"female"}
    ]
  }
  render(){
    console.log(this.state)
    return(
      <div>
        <h1>This is a class Component</h1>
        <p>Name is:{this.state.subjectName}</p>
        <p>Year is:{this.state.Year}</p>
        <p></p>
      </div>
    )
  }
}

export default App;