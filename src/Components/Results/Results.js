
import React, { PureComponent } from 'react';
import Plot from 'react-plotly.js';
import groupBy from 'lodash/groupBy';
import map from 'lodash/map';
import { ResultsWrapper } from './style';
import PropTypes from 'prop-types';

class Results extends PureComponent {
    
    render(){            
        const { data } = this.props;
        const groupedResults = groupBy(data, (element)=> element.incident_datetime.slice(0,4));
        return(
          <ResultsWrapper>
            <Plot
              data={[
            {type: 'bar', x: Object.keys(groupedResults), y: map(groupedResults,(year) =>{return year.length;})}
            ]}
              layout={ {width: 1000, height: 460, title: 'Crimes 100 meters from the address, By Years'} }
              config= {{displayModeBar: false}}
            /> 
          </ResultsWrapper>
        );
    }
}

Results.propTypes = {
  data: PropTypes.array
}

export default Results;