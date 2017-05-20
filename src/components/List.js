import React from 'react';

import ListItems from './ListItems';

export class List extends React.Component {
    render() {
        const {pages} = this.props;
        const Lists = pages.map((page, key) => {
            return (
                <ListItems page={page} id={key} key={key}/>
            )
        });
        return (
            <ul>{Lists}</ul>
        )
    }
}