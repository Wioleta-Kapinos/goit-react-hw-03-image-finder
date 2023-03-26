import { Component} from "react";
import css from "./Modal.module.css";
import propTypes from 'prop-types';

export class Modal extends Component {
    handleModalClose = event => {
        const { closeModal } = this.props;
        if(event.code === "Escape") {
            closeModal();
        }
        if(event.target.tagName !== "img") {
            closeModal();
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleModalClose);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleModalClose);
    }

    render() {
        const { image } = this.props;
            return (
                <div onClick={this.handleModalClose} className={css.overlay}>
                    <div className={css.modal}>
                        <img 
                            src={image}
                            alt=""
                        />
                    </div>
                </div>
            );
    }
}

Modal.propTypes = {
    image: propTypes.string,
}