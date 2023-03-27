import { Component } from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css";
import propTypes from 'prop-types';

export class ImageGallery extends Component {
    render(){
        const { images, openModal } = this.props;
        return (
            <ul className={css.gallery}>
                {images.map(({ id, webformatURL, largeImageURL}) => {
                    return (
                        <ImageGalleryItem
                        key={id}
                        webformatURL={webformatURL}
                        largeImageURL={largeImageURL}
                        openModal={openModal}
                        />
                    );
                })}
            </ul>
        );
    }
}

ImageGallery.propTypes = {
    images: propTypes.array,
    openModal: propTypes.func,
}