import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/Home.module.css";

const Input = ({ icon, placeholder, onChange, error, value }) => {
  return (
    <div
      style={{
        margin: "15px 0",
      }}
    >
      <div className={styles.inputContainer}>
        <img src={icon} className={styles.inputIcon} />
        <input
          type="text"
          className={styles.input}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
      {error && <p className={styles.inputError} >{error}</p>}
    </div>
  );
};

Input.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default Input;
