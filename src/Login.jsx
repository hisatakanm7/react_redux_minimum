import React from "react";
import { Link, hashHistory } from "react-router";


export default class Login extends React.Component {
    render() {
        console.log(hashHistory);
        return (
            <div>
                <h2>Login</h2>
                <div onClick={()=>hashHistory.goBack()}>Go BACK</div>
            });
            </div>
        )
    }
}
