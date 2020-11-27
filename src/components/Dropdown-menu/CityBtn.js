import React from 'react';
import './CityBtn.css'

function CityBtn ({ title, pos, isActive }) {
  const [shift, setShift] = React.useState(-60);

  React.useEffect(() => {
    if (isActive) {
      setShift(pos);
    } else {
      setShift(-60);
    }
  }, [isActive, pos]);

  return (
    <li className="droplist__tab" style={{transform: `translateY(${shift}px)`}}>
      {title}
    </li>
  );
}

export default CityBtn;
