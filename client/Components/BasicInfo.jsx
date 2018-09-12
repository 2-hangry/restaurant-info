import React from "react";
const moment = require("moment");

const imageStyle = {
  width: 25 + "px",
  height: 25 + "px",
  backgroundColor: "green"
};

const BasicInfo = props => {
  const time = props.businessHours.open[moment().format('d')-1];
  const start = moment((Math.floor(time.start)/100), 'HH').format('hh:mm a');
  const end = moment((Math.floor(time.end)/100), 'HH').format('hh:mm a');
  return (
    <span>
      <img src={require("../tinyClock.png")} style={imageStyle} />
      <span>Today {start} - {end}</span>
    </span>
  );
};

export default BasicInfo;