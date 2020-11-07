import './App.css';
import React,{ Component } from 'react'
import CodeArea from './components/code_area_component'
import InputArea from './components/input_area_component'
import MoreOptionsCompiler from'./components/more_options_compiler'
import OutputArea from './components/output_area_component'
import axios from 'axios'

export default class App extends Component {
  constructor(){
    super();
    this.state={
      code: "",
      input:"",
      language: "",
      path: "a/b/",
      filename:"one"
    };
  }
  onChangeCode=async(e)=>{
await this.setState(function(prevval){
  return {
    ...prevval,
    code:e.target.value,
  }
});
//console.log(this.state);
}

onChangeInput=async(e)=>{
  await this.setState(function(prevval){
    return {
      ...prevval,
      input:e.target.value
    }
  })
 // console.log(this.state);
}
onChangeLanguage=async (e)=>{
  await this.setState(function(prevval){
    return{
      ...prevval,
      language:e.target.value
    }
  })
}
handleSubmit= async (e)=>{
  e.preventDefault();
  console.log(this.state);
  const response = await fetch("http://192.168.2.109:3001/compilefile", {
    method: "POST",
    mode: "cors",
    headers: {
        // "Authorization": `Bearer: $`,
        "Content-Type": "application/json"
    },
    body: JSON.stringify(this.state)
});
console.log(response.json())
}
  

render(){
  return <div className="App">
      <h1>  Online IDE</h1>
      <form onSubmit={this.handleSubmit}>
      <CodeArea code="" onChangeCode={this.onChangeCode} />
      <InputArea onChangeInput={this.onChangeInput} />
      <MoreOptionsCompiler onChangeLanguage={this.onChangeLanguage}/>
      <br />
      <button type="submit">Compile</button>
      <br />
      <OutputArea />
      </form>
    </div>
  }
}