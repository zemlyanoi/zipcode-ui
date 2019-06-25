import React, {Component} from 'react';
import './merged-zipcodes-error-component.css'


export default class MergedZipcodesErrorPanel extends Component{

  render() {
   

    return (
        <div className="card text-white bg-danger mb-3"
             style="max-width: 20rem;">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h4 className="card-title">Danger card title</h4>
            <p className="card-text">Some quick example text to build on the
              card title and make up the bulk of the card's content.</p>
          </div>
        </div>
    );
  }
};
