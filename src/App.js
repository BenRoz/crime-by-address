import React, { Component } from 'react';
import { SearchBar, Results } from './Components';
import { AppWrapper } from './appStyle';
import { faSearch } from './styles/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

class App extends Component {
  constructor () {
    super();
    this.state = {
      result: '',
      error: false
    };
    this.handleSearch = this.handleSearch.bind(this)
  }
  
  handleError(){
    this.setState({error: true, result: ''})
  }
    
    handleSearch(searchInput){
        let lat="";
        let lng="";
        axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${searchInput}&key=8c4b6f0fce0d4ac79013b6403a3e3f51`).then((response) =>{
          if (response.data.results[0]){
            lat = response.data.results[0].geometry.lat;
            lng = response.data.results[0].geometry.lng;
            axios.get(`https://moto.data.socrata.com/resource/7pap-2yk6.json?$where=within_circle(location, ${lat}, ${lng},100)&$select=incident_datetime,incident_type_primary`)
            .then((res) => {
              this.setState({result: res.data, error: false});
            })
          .catch((error) =>{
            this.handleError()
            console.log(error);
          })
        } else{this.handleError()}
      });        
    };

  render() {
    return (
      <AppWrapper>
        <FontAwesomeIcon icon={ faSearch } style={svgStyle} />
        <SearchBar handleSearch={(searchInput) => this.handleSearch(searchInput)}/>
        {this.state.error === true ? <div style={errorMsgStyle}>We were unable to find results, please make sure you inserted legit address in Jacksonville, AR</div> : null}
        {this.state.result !== "" ? <Results data={this.state.result}/>: null}
      </AppWrapper>
    );
  }
}


const svgStyle= { width:'40%', height:'40%', color: '#57D9A3', position: 'absolute', opacity:'0.8', top:'10%' }
const errorMsgStyle = { position: 'absolute', top: '6vh', color: 'red', fontSize: '15px' }

export default App;
