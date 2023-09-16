import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/Home.module.css";
import Loader from "./Loader";

const Button = ({ text, loading = false, disabled, onSubmit }) => {
  return (
    <button type="submit" className={styles.button} disabled={disabled} onClick={onSubmit}>
      {!loading ? text : <Loader className="spinner" />}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onSubmit: PropTypes.func,
};

export default Button;
