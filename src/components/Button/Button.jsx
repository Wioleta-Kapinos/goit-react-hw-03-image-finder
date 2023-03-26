import { Component } from "react";
import css from "./Button.module.css";
import propTypes from 'prop-types';

export class Button extends Component {
    render() {
        const { handleButtonClick } = this.props;
        return (
            <button
            onClick={handleButtonClick}
            className={css.btnLoadMore}
            type="button"
            >
            Load more
            </button>
        )
    }
}

Button.propTypes = {
    handleButtonClick: propTypes.func,
}