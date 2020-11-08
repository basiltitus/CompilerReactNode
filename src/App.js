import './App.css';
import React,{ Component } from 'react'
import CodeArea from './components/code_area_component'
import InputArea from './components/input_area_component'
import MoreOptionsCompiler from'./components/more_options_compiler'
import OutputArea from './components/output_area_component'
import axios from 'axios'
import { func } from 'prop-types';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      code: "",
      input:"",
      language: "c++",
      path: "a/b/",
      filename:"one",
      buttonname:"Compile",
      buttomdisabled:false
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
  this.setState(function(prevval){
    return {
      ...prevval,buttonname:'Loading....',buttomdisabled:true
    }
  });
  console.log(this.state);
   axios.post("https://192.168.1.105/compilefile",JSON.stringify(this.state)).then(function(response){
      console.log(response.data)
      this.setState(function(prevval){
        return {
          ...prevval,buttonname:'Compile Again',buttomdisabled:false
        }
      });
    })
    // body: JSON.stringify(this.state)


//console.log(response.json())
};
  

render(){
  return <div className="App">
      <h1>  Online IDE</h1>
      <form onSubmit={this.handleSubmit}>
      <CodeArea code="" onChangeCode={this.onChangeCode} />
      <InputArea onChangeInput={this.onChangeInput} />
      <MoreOptionsCompiler onChangeLanguage={this.onChangeLanguage}/>
      <br />
      <button disabled={this.state.buttomdisabled} type="submit">{this.state.buttonname}</button>
      <br />
      <OutputArea />
      </form>
    </div>
  }
}