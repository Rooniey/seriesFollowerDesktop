import React from 'react';
import ApplicationBar from "./layout/ApplicationBar";
import CustomDrawer from "./layout/MenuDrawer";
import * as PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import withStyles from "../../node_modules/@material-ui/core/es/styles/withStyles";
import {LoginForm} from "./authentication/Login";
import {MovieList} from "./movies/MovieList";
import {Authentication} from "./authentication/Authentication";

export const style = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    }
});

class App extends React.Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    render() {
        const {classes} = this.props;

        return (
            <BrowserRouter>
                <div className={classes.root}>
                    <ApplicationBar open={this.state.open} handleDrawerOpen={this.handleDrawerOpen}/>
                    <CustomDrawer open={this.state.open} handleDrawerClose={this.handleDrawerClose}/>
                    <main className={classes.content}>
                        <Switch>
                            <Route path="/login" component={LoginForm}/>
                            <Authentication>
                                <Route path="/movies" component={MovieList}/>
                            </Authentication>
                        </Switch>
                    </main>
                </div>
            </BrowserRouter>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(style)(App);


