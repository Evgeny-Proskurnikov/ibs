import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { removeItems, addCityName } from '../../actions';
import './CityBtn.css'

function CityBtn ({ title, pos, isActive, removeStoreItems, addCityToStore }) {
  const [ shift, setShift ] = useState(-60);

  useEffect(() => {
    if (isActive) {
      setShift(pos);
    } else {
      setShift(-60);
    }
  }, [isActive, pos]);

  function handleTabClick() {
    removeStoreItems();
    addCityToStore(title);
  }

  return (
    <li className="droplist__tab" style={{transform: `translateY(${shift}px)`}} onClick={handleTabClick}>
      {title}
    </li>
  );
}

const mapStateToProps = (state) => ({
  storeData: state
});

const mapDispatchToProps = (dispatch) => ({
  removeStoreItems: () => dispatch(removeItems()),
  addCityToStore: item => dispatch(addCityName(item)),
});

export default (connect(mapStateToProps, mapDispatchToProps))(CityBtn);
