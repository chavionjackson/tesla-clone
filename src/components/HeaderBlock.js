import React from 'react'
import "../styles/HeaderBlock.css";


const HeaderBlock = () => {
    return (
      <div className="headerBlock">
        <div className="headerBlock-info">
          <div className="headerBlock-infoText">
            <h1>Model 3</h1>
            <h4>
              Order Online for <span>Touchless Delivery</span>
            </h4>
          </div>
          <div className="headerBlock-actions">
            <button className="headerBlock-primary">custom order</button>
            <button className="headerBlock-secondary">existing inventory</button>
          </div>
        </div>
      </div>
    );
}

export default HeaderBlock
