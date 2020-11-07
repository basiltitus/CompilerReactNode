import React, { Component } from 'react'

export default class InputArea extends Component{
    constructor(props){
        super();
    }

    render(){
        return <div>
            <h3>Input</h3>
            <textarea onChange={this.props.onChangeInput} rows={7} cols={50} />
           </div>
    }
}