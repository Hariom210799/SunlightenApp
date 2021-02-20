import React, { Component} from 'react';
import { Radio, RadioGroup, Button} from 'react-mdl';

class Manual extends Component{
    render(){
        return(
            <div style={{height: '300px', position: 'relative' }}>
                <h4 style={{color:"white"}}>Select your Choice</h4>
                <RadioGroup style={{color:"white"}}container="ul" childContainer="li" name="demo1" value="opt2">
                    <Radio value="opt1">State</Radio>
                    <Radio value="opt2">Distict</Radio>
                </RadioGroup>
                <h4 style={{color:"white"}}>Select your Choice</h4>
                <RadioGroup style={{color:"white"}}container="ul" childContainer="li" name="demo2" value="opt2">
                    <Radio value="opt1">Increasing order</Radio>
                    <Radio value="opt2">Decreasing order</Radio>
                </RadioGroup>
                <Button raised colored>sent</Button>
    
            </div>
            )
    }
}

export default Manual;
