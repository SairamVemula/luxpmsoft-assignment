import React from "react";
import PropTypes from "prop-types";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        {props.content}
      </div>
    </div>
  );
};

Popup.propTypes = {
  handleClose: PropTypes.func
};

export default Popup;
