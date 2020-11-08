// Style

import './code_area_component_style.css';

import React, { Component } from 'react'
import AceEditor from 'react-ace';
import 'brace/mode/javascript'
import 'brace/mode/c_cpp'
import 'brace/theme/monokai'
import 'brace/theme/textmate'
import Switch from "react-switch";



export default class CodeArea extends Component{
    constructor(props){
        super();
        this.state={
            dark:true
        }
        
    }
    onChanged=(checked)=> {
      this.setState({
        dark:checked
      })
    }
    render(){
        return<div><center>
            <br/>
            <h3>
                Code Area
            </h3>
            <div className="button-container-flex">
              <p>Dark theme</p>
            <Switch className="button-flex" onChange={this.onChanged} checked={this.state.dark} />
            </div>
            {/* <Switch size="default" defaultChecked onChange={this.onChanged} >Dark Mode</Switch> */}
    <br />
            <AceEditor highlightActiveLine='true' onChange={this.props.onChangeCode}  width="90%" height="300px" mode="c_cpp" theme={this.state.dark?"monokai":"textmate"} fontSize='20px' />
            {/* <textarea type="textarea" 
          name="codearea"
          rows={10}
          cols={150}
          onChange={this.props.onChangeCode}
        /> */}
      </center>
        </div>

        
    }
}