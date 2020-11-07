import React, { Component } from 'react'

export default class MoreOptionsCompiler extends Component{
    constructor(props) {
        super(props); 
      }   
         render(){
        return <div><br/>
            Language : <select selected onChange={this.props.onChangeLanguage}>
                <option value="c++">C++</option>
                <option value='c'>C</option>
            </select>&nbsp;
            Compile with input :
            {/* <span onChange={this.onChangeValue}> 
            <input type="radio" value="yes" name="compile_with_input">Yes</input>
            <input type="radio" value="no" name="compile_with_input">No</input>
            </span> */}
            <br/>
        </div>
    }
}