import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {MenuItems} from "./MenuItems";
import {customDrawerStyles} from "./styles";

class MenuDrawer extends React.Component {

    render() {
        const { classes, theme } = this.props;
        return (
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classNames(classes.drawerPaper, !this.props.open && classes.drawerPaperClose),
                    }}
                    open={this.props.open}>
                    <div className={classes.toolbar}>
                        <IconButton onClick={this.props.handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <MenuItems/>
                    </List>
                </Drawer>
        );
    }
}

MenuDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(customDrawerStyles, { withTheme: true })(MenuDrawer);