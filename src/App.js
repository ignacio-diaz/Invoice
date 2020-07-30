import React from 'react';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <div className="App-header">
        <div class="ui raised very padded text container segment">
          <div class="ui header">
            <div className="ui-header">
              <span>I N V O I C E</span>
              <div className="date">
                1 6 / 0 2 / 2 0 1 6
              </div>
              <div className="number">
                #89 289
              </div>             
            </div>
          </div>
          <br />
          <br />
          <br/>
          <hr className="color"/>
          <div className="ui-header2">
            <p className="date">P R O D U C T</p>
            <div className="desc-title">
              <p>U N I T</p>
              <p>P R I C E</p>
            </div>
          </div>
          <div className="detail-form">
            <p className="product">Espresso (large)</p>
            <p>1</p>
            <p>2.90</p>
          </div>
          <div className="detail-form">
            <p className="product">Capuccino (small)</p>
            <p>2</p>
            <p>7.00</p>
          </div>
          <div className="detail-form-total">
            <p className="product">Total</p>
            <p></p>
            <p>9.90</p>
          </div>
          <hr />
          <div className="pay">
            <p/>
            <br/>
            <p/>
            <br />
            <p>LATER</p>
            <p className="pay-button">PAY NOW</p>
          </div>              
        </div>
      </div>
    </div>
    </>
  );
}

export default App;