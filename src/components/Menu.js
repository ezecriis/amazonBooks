import React from 'react';
import Search from './Search';
import '../css/menu.css';
import PanelAdd from './PanelAdd';

class Menu extends React.Component{

    // constructor(props) {
    //     super(props);
    //     this.state = {
            
    //     }
    // }

    state = { newItemPanel: false };

    Add = () => {
        this.setState({newItemPanel: true});
        console.log('message');
    }

    OnCancel = () => {
        this.setState({newItemPanel: false});
    }

    render() {
        return (
            <div className="container">
                <div className="subcontainer">
                    <div className="logo">
                        {this.props.title}
                    </div>

                    <div className="search">
                        <Search onSearch={this.props.onSearch} />
                    </div>

                    <div className="actions">
                        <button onClick={this.Add} className="button btn-blue">
                            + Añadadir nuevo libro
                        </button>
                    </div>
                    {
                        (this.state.newItemPanel)?
                        <PanelAdd OnCancel={this.OnCancel} onAdd={this.props.onAdd} />
                        :
                        ''
                    }
                </div>
            </div>
        )
    }
}

export default Menu;
