import React, { PureComponent } from 'react';
import { SearchBarWrapper } from './style';
import { InputBar, SearchButton } from '../index';
import PropTypes from 'prop-types';
class SearchBar extends PureComponent {
    constructor () {
		super();
		this.state = {
            value: '',
            loading: false
        };
        this.onChange = this.onChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    UNSAFE_componentWillReceiveProps(){
        if (this.state.loading){
            this.setState({loading: false});
        }
    }

    onChange(e) {    
        this.setState({value: e.target.value});
    }
    
    handleClick(){
        const { handleSearch } = this.props;
        this.setState({loading: true});
        handleSearch(this.state.value);
    }

    render(){   
        return(
            <SearchBarWrapper>
                <InputBar onChange={this.onChange}/>
                <SearchButton loading={ this.state.loading } handleClick={ this.handleClick }/>
            </SearchBarWrapper>
        );
    }
}

SearchBar.propTypes = {
    handleSearch: PropTypes.func.isRequired
}

export default SearchBar;