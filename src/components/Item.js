import React from 'react';
import '../css/item.css';

class Item extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            image: '',
            rating: 1,
            stars: []
        };
    }

    componentDidMount() {
        this.setState({
            id: this.props.id,
            title: this.props.title,
            image: this.props.image,
            rating: this.props.rating,
            stars: Array(parseInt(this.props.rating)).fill(0)
        });
        this.props.onUpdateRating({ id: this.state.id, title: this.state.title, image: this.state.image, rating: this.state.rating });
    }

    onChangeRating = e => {
        const rating = parseInt(e.target.value);
        console.log(rating);

        this.setState({
            rating: parseInt(e.target.value),
            stars: Array(parseInt(e.target.value)).fill(0)
        });
    }

    onRemove = e => {
        this.props.onRemove(this.props.id);
    }

    render() {
        return (
            <div className="item">
                <div className="image">
                    <img src={'img/' + this.props.image} width="100%" alt="" />
                </div>
                <div className="title">
                    {this.props.title}
                </div>
                <div className="rating">
                    <p>
                        {
                            this.state.stars.map(x =>
                                <img src="img/star.png" alt="" width="32" />
                            )
                        }
                    </p>
                    Calificacion:
                    <select value={this.state.rating} onChange={this.onChangeRating}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="actions">
                    <button onClick={this.onRemove}>Eliminar</button>
                </div>
            </div>
        )
    }
}

export default Item;
