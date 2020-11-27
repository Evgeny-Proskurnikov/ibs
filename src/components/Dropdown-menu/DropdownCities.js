import React from 'react';
import CityBtn from './CityBtn';
import './DropdownCities.css'

import { CITY_NAMES } from '../../constants/constants';

function DropdownCities ({ isOpened }) {
  return (
    <ul className="droplist">
      {CITY_NAMES.map((item, idx) => {
        const position = idx * 40;

        return (
          <CityBtn
            key={item.id}
            title={item.city}
            pos={position}
            isActive={isOpened}
          />
        );
      })}
    </ul>
  );
}

export default DropdownCities;
