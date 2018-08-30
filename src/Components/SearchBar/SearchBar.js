import React, { PureComponent } from 'react';
import { SearchBarWrapper } from './style';
import { InputBar, SearchButton } from '../index';

class SearchBar extends PureComponent {
    constructor () {
		super();
		this.state = {
			value: ''
        };
        this.onChange = this.onChange.bind(this);
        this.handleClick = this.handleClick.bind(this)
	}
    
    onChange(e) {    
        this.setState({value: e.target.value});
    };
    
    handleClick(){
        const { handleSearch } = this.props;
        handleSearch(this.state.value);       
    };

    render(){    
        return(
            <SearchBarWrapper>
                <InputBar onChange={this.onChange}/>
                <SearchButton handleClick={ this.handleClick }/>
            </SearchBarWrapper>
        )
    }
};

export default SearchBar;