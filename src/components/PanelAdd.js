import React from 'react';

class PanelAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            image: '',
            rating: 1
        };
    }

    onChangeTitle = (e) => {
        this.setState({title: e.target.value});
    }

    onChangeImage = (e) => {
        this.setState({image: e.target.value});
    }

    onChangeRating = (e) => {
        const rating = parseInt(e.target.value);
        console.log(rating);
        this.setState({rating: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const title = this.state.title;
        const image = this.state.image;
        const rating = this.state.rating;

        this.props.onAdd({ title: title, image: image, rating:rating });
        this.props.OnCancel();
    }

    render() {
        return (
            <div className="new-item-panel-container">
                <div className="new-item-panel">
                    <form onSubmit={this.onSubmit}>
                        <p>
                            <label>
                                Titulo del Libro
                            </label>
                            <br />
                            <input onChange={this.onChangeTitle} type="text" name="title" className="input" />
                        </p>

                        <p>
                            <label>
                                Nombre de la imagen
                            </label>
                            <br />
                            <input onChange={this.onChangeImage} type="text" name="image" className="input" />
                        </p>

                        <p>
                            <label>
                                Calificacion
                            </label>
                            <br />
                            <select onChange={this.onChangeRating} name="" id="">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </p>
                        <input type="submit" className="button btn-blue" value="Registrar libro" />
                        <button onClick={this.props.OnCancel} className="button btn-normal">
                            Cancelar
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default PanelAdd;
