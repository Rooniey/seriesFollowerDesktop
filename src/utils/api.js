import React, {Component} from 'react';
import {API_BASE_URL} from '../config/config';


export const withFetching = ({url = '', headers = {}, queryParams = {}} = {}) => {
    const keyValuePairs = [];
    for (const key in queryParams) {
        if (queryParams.hasOwnProperty(key)) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(queryParams[key]));
        }
    }
    const queryString = `?${keyValuePairs.join('&')}`;
    const apiUrl = `${API_BASE_URL}${url}${queryString}`;

    return (Component) =>
        class WithFetching extends React.Component {
            constructor(props) {
                super(props);

                this.state = {
                    data: null,
                    isLoading: false,
                    error: null,
                };
            }


            componentDidMount() {
                this.setState({isLoading: true});
                fetch(apiUrl, {
                    method: 'get',
                    headers: headers,
                }).then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Something went wrong ...');
                    }
                })
                    .then(response => this.setState({data: response, isLoading: false}))
                    .catch(error => this.setState({error, isLoading: false}));
            }

            render() {
                return <Component {...this.props} {...this.state} />;
            }
        }
};

