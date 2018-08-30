import React, { PureComponent } from 'react';
import { SearchButtonWrapper } from './style';
import { faSearch } from '../../styles/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchButton extends PureComponent {
    render() {
      const { handleClick } = this.props;
      return (
        <SearchButtonWrapper onClick={ handleClick }>
          <FontAwesomeIcon icon={ faSearch } style={{color:'white', width:'25%', height:'30%'}} />
        </SearchButtonWrapper>
      );
    }
  }
  
  export default SearchButton;