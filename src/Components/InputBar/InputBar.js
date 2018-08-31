import React, { PureComponent } from 'react';
import { InputBarWrapper } from './style';
import PropTypes from 'prop-types';
class InputBar extends PureComponent {
    
    render(){
        const { onChange } = this.props;
        return(
            <InputBarWrapper
              onChange= {onChange}
              type= 'text'
              placeholder= 'search address' 
            >
            </InputBarWrapper>
        );
    }
}

InputBar.propTypes= {
    onChange: PropTypes.func.isRequired
}
export default InputBar;