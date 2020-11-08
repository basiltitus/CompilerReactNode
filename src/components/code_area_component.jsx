import React, { Component } from 'react'
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';


export default class CodeArea extends Component{
    constructor(props){
        super();
        this.state={
            code:""
        }
        
    }
    render(){
        return<div>
            <br/>
            <h3>
                Code Area
            </h3>
            
            <textarea type="textarea" 
          name="codearea"
          rows={10}
          cols={150}
          onChange={this.props.onChangeCode}
        />
{/* <Editor
        value={this.state.code}
        onValueChange={this.props.onChangeCode}
        highlight={code => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
      /> */}
        </div>

        
    }
}