import React, { PureComponent } from 'react';
import { InputBarWrapper } from './style';

class InputBar extends PureComponent {
    
    render(){
        return(
            <InputBarWrapper
            onChange= {this.props.onChange}
            type= 'text'
            placeholder= 'search address' 
            >
            </InputBarWrapper>
        )
    }
};

export default InputBar;