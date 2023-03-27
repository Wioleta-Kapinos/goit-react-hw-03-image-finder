import { Component } from "react";
import axios from "axios";
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
    error: false,
    API: "32928385-c573e9cc533413973b7398451",
  } 

  async searchImages() {
    const { API, query, page, } = this.state;
    this.setState({ query, isLoading: true, });
    try {
      const URL = `https://pixabay.com/api/?key=${API}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`;
      const response = await axios.get(URL);
        if (response.data.hits.length > 0) {
          this.setState({
            images: [...this.state.images, ...response.data.hits],
            isLoading: false,
          });
        } else {
          alert("Sorry, there are no images matching your search query.");
          this.setState({
            isLoading: false,
          })
        }
    } catch {
      this.setState({ 
        error: true,
        isLoading: false, 
      }); 
    }  
  }

  handleSubmit = query => {
    if (query !== this.state.query) {
      this.setState({
        page: 1,
        images: [],
        query: query,
        isLoading: false,
      });
      setTimeout(() => {
        this.searchImages();
      }, 500);
    }
  }

  openModal = url => {
    this.setState( { modal: true, largeImageURL: url })
  }

  closeModal = () => {
    this.setState({ modal: false, largeImageURL: "" })
  }
  handleButtonClick = event => {
    event.preventDefault();
    this.setState({
      page: this.state.page + 1,
      isLoading: false,
    });
    setTimeout(() => {
      this.searchImages();
    }, 500);
  }

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
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