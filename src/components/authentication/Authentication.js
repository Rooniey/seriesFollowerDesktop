import React from 'react';


export class Authentication extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            user: null
        }
    }

    async componentDidMount() {
        const jwt = localStorage.getItem('token');
        console.log(jwt)
        try {
            const response = await fetch('https://sheltered-garden-78220.herokuapp.com/users/authenticate',
                {
                    method: 'GET',
                    headers: {
                        Authorization: jwt
                    }
                });
            if (!response.ok) throw new Error('Something went wrong...');
            this.state.user ='fajno'
        } catch (err) {
            console.log('Error occurred while accessing SeriesFollower API', err);
        }
    }

    render() {

        if(this.state.user){
            return(
                <div>
                    {this.props.children}
                </div>
            )
        }

        return <p>LOADING</p>
    }

}