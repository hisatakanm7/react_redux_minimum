import React , { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
// const { ipcRenderer } = require("electron");

export class ListItems extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.getElementById(this.props.id).addEventListener('mousedown', this.list_send_event.bind(this), false);
    }

    componentWillUnmount() {
        document.getElementById(this.props.id).removeEventListener('mousedown', this.list_send_event.bind(this), false);
    }

    list_send_event (event) {
        // console.log(event.target.textContent);
        // ipcRenderer.send("asynchronous-next-data", event.target.textContent);
    }
    render() {
        const {page, id} = this.props;
        return (
            //page.nameにするつもり
            <li id={id}>{page.url}</li>
        )
    }
}
