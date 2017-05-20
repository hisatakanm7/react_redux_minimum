import React from 'react';
import { connect } from 'react-redux';
import { addList } from '../action';
import { Link } from "react-router";


import { Provider } from 'react-redux';

class Page extends React.Component {
    render() {
        const data = this.props.page.toJS().datas;
        const { addList } = this.props;
        return (
            <div>
                <button onClick={() => addList()}>
                    text
                </button>
                <Link to="pages/1">Page1</Link>
                <Link to="login">Login</Link>
                <List pages={data} />
                {this.props.children}
            </div>
        );
    }
}

class List extends React.Component {
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

class ListItems extends React.Component {
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
//        console.log(event.target.textContent);
//        ipcRenderer.send("asynchronous-next-data", event.target.textContent);
    }
    render() {
        const {page, id} = this.props;
        return (
            //page.nameにするつもり
            <li id={id}>{page.url}</li>
        )
    }
}


const mapStateToProps = (state) => {
    const { page } = state;
    return {
        page: page
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addList: e => dispatch(addList(e))
    };
};

const ContainerBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(Page);

export default ContainerBox;
