import React, {Component} from 'react';
import TextField from "../../../node_modules/@material-ui/core/TextField/TextField";
import Button from "../../../node_modules/@material-ui/core/Button/Button";
import "./Login.css";

export class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleClick = async (event) => {
        event.preventDefault();
        const payload = JSON.stringify({
            email: this.state.email,
            password: this.state.password
        });

        try {
            const response = await fetch('https://sheltered-garden-78220.herokuapp.com/users/signIn',
                {
                    method: 'POST',
                    headers: {
                        ['Content-Type']: 'application/json'
                    },
                    body: payload
                });
            if (!response.ok) throw new Error('Something went wrong...');
            const data = await response.json();
            localStorage.setItem('token', data.token);

        } catch (err) {
            console.log('Error occurred while accessing SeriesFollower API', err);
        }
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        return (
            <form onSubmit={this.handleClick} className="login-form">
                <div className="login-fields">
                    <TextField
                        label="Email"
                        type="text"
                        placeholder="Email"
                        className="login-field"
                        value={this.state.email}
                        onChange={this.handleChange('email')}/>
                    <TextField
                        label="Password"
                        type="password"
                        className="login-field"
                        value={this.state.password}
                        onChange={this.handleChange('password')}/>
                </div>
                <Button variant="contained" size="medium" color="primary" className="login-button">
                    Log in
                </Button>
            </form>
        )
    }
}