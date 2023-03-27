import { Component } from "react";
import css from "./Searchbar.module.css";

export class Searchbar extends Component {
    state = {
        value: "",
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const value = this.state.value;
        if (value !== "") {
            this.props.onSubmit(this.state.value);
        } else {
            alert("Empty field, please complete them.");
            return;
        }
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
    }  

    render() {
        return (
            <header className={css.searchbar}>
                <h1>Image Finder</h1>
                <form onSubmit={this.handleSubmit} className={css.form}>
                    <input
                        value={this.state.value}
                        onChange={this.handleChange}
                        className={css.inputForm}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images..."
                    />
                    <button type="submit" className={css.buttonForm}>
                        <span className={css.labelSearch}>&#128269;</span>
                    </button>
                </form>
            </header>
        )
    }
}