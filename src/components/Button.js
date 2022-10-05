import PropTypes from "prop-types";
import styles from "../components/css/button.css"

function Button({text, onClick}) {
    return <button className={styles.btn} onClick={onClick}>{text}</button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default Button;