import { Component } from "react";
import api from "utils/api";
import { Loader } from "./Loader/Loader";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Modal } from "./Modal/Modal";
import { Button } from "./Button/Button";
import "index.css";

export class App extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    modal: false,
    isLoading: false,
    largeImageURL: "",
    error: "",
  }

  searchImages = async query => {
    this.setState({ isLoading: true });
    try {
      const response = await api(query);
        if (response.data.totalHits === 0) {
          this.setState({ 
            images: [],
            isLoading: false,
          });
          alert("Sorry, there are no images matching your search query. Please try again.");
          return;
        } else {
          this.setState(() =>{ 
            return {
              images: [...this.state.images,  ...response.data.hits],
              page:  this.state.page + 1,
              isLoading: false,
            };
          })
        }
    } catch (error) {
      this.setState({ error });
      this.setState({ isLoading: false});
    } 
  }

  openModal = url => {
    this.setState( { modal: true, largeImageURL: url })
  }

  closeModal = () => {
    this.setState({ modal: false, largeImageURL: "" })
  }
  handleButtonClick = async event => {
    event.preventDefault();
    this.searchImages(this.state.query);
  }

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.searchImages} />
        {this.state.error && <p>Something went wrong, please try later.</p>}
        {this.state.isLoading && <Loader />}
        <ImageGallery images={this.state.images} openModal={this.openModal}/> 
        {this.state.images.length > 0 && <Button handleButtonClick={this.handleButtonClick} />}
        {this.state.modal && 
        <Modal image={this.state.largeImageURL} closeModal={this.closeModal}  />
        } 
      </div>
    );
  }
}