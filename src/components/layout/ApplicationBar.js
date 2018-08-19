import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {applicationBarStyles} from "./styles";

class ApplicationBar extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <AppBar
                position="absolute"
                className={classNames(classes.appBar, this.props.open && classes.appBarShift)}>
                <Toolbar disableGutters={!this.props.open}>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={this.props.handleDrawerOpen}
                        className={classNames(classes.menuButton, this.props.open && classes.hide)}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="title" color="inherit" noWrap>
                        SeriesFollower
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

ApplicationBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(applicationBarStyles)(ApplicationBar);