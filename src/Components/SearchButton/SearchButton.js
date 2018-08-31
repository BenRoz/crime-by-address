import React, { PureComponent } from 'react';
import { SearchButtonWrapper } from './style';
import { faSearch, faSpinner } from '../../styles/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
class SearchButton extends PureComponent {
    render() {
      const { handleClick, loading } = this.props;
      return (
        <SearchButtonWrapper onClick={ handleClick }>
          { !loading ? <FontAwesomeIcon icon={ faSearch } style={iconStyle} />
          : <FontAwesomeIcon icon={ faSpinner } spin key={'spin'}  style={iconStyle}/> }
        </SearchButtonWrapper>
      );
    }
  }
  
const iconStyle = {color:'white', width:'25%', height:'30%'} ;

SearchButton.propTypes={
  handleClick: PropTypes.func.isRequired,
  loading: PropTypes.bool
}
  export default SearchButton;