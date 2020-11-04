import React from 'react';
import Item from './Item';
import '../css/list.css';

function List(props) {
    return (
        <div className="List">
            {
                props.items.map((item) =>
                <React.Fragment key={item.id}>
                    <Item
                        key={item.key}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        rating={item.rating}
                        onUpdateRating={props.onUpdateRating}
                        onRemove={props.onRemove}
                    />
                </React.Fragment>
                )
            }
        </div>
    );
}

export default List;
