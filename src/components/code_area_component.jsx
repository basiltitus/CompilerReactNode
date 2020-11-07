import React, { Component } from 'react'

export default class CodeArea extends Component{
    constructor(props){
        super();
        
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

        </div>

        
    }
}