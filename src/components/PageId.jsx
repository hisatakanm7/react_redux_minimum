import React from "react";
import { Link, hashHistory } from "react-router";


export default class PageId extends React.Component {
    render() {
        console.log(hashHistory);
        console.log(this.props);
        return (
            <div>
                <h2>pageId</h2>
                <h2>{this.props.params.pageId}</h2>
                <div onClick={()=>hashHistory.goBack()}>Go BACK</div>
                });
            </div>
        )
    }
}