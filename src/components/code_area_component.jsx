import React, { Component } from 'react'
import AceEditor from 'react-ace';
import 'brace/mode/javascript'
import 'brace/mode/c_cpp'
import 'brace/theme/monokai'
import { Switch } from 'antd';


export default class CodeArea extends Component{
    constructor(props){
        super();
        this.state={
            code:""
        }
        
    }
    onChange=(checked)=> {
      console.log(`switch to ${checked}`);
    }
    render(){
        return<div><center>
            <br/>
            <h3>
                Code Area
            </h3>
            <Switch defaultChecked onChange={onChange} />
    <br />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <br />
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />
            <AceEditor width="90%" height="300px" mode="c_cpp" theme="monokai" fontSize='20px' />
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