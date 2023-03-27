import { Component } from "react";
import css from "./ImageGalleryItem.module.css";
import propTypes from 'prop-types';

export class ImageGalleryItem extends Component {
    render(){
        const { openModal, tags, webformatURL, largeImageURL } = this.props;
            return (
                <li className={css.galleryItem}>
                    <img
                        className={css.galleryImage} 
                        src={webformatURL} 
                        alt={tags}
                        onClick={() => openModal(largeImageURL)} 
                    />
                </li>
            )
    }
}

ImageGalleryItem.propTypes = {
    openModal: propTypes.func,
    tags: propTypes.string,
    webformatURL: propTypes.string,
    largeImageURL: propTypes.string,
}