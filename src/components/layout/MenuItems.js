import React from 'react';
import ListItemIcon from "../../../node_modules/@material-ui/core/ListItemIcon/ListItemIcon";
import InboxIcon from "../../../node_modules/@material-ui/icons/MoveToInbox";
import ListItemText from "../../../node_modules/@material-ui/core/ListItemText/ListItemText";
import ListItem from "../../../node_modules/@material-ui/core/ListItem/ListItem";
import {Link} from 'react-router-dom';

export function MenuItems() {
    return (
        <div>
            <ListItem button component={Link} to='/login'>
                <ListItemIcon>
                    <InboxIcon/>
                </ListItemIcon>
                <ListItemText primary="Inbox"/>
            </ListItem>
            <ListItem button component={Link} to='/movies'>
                <ListItemIcon>
                    <InboxIcon/>
                </ListItemIcon>
                <ListItemText primary="Inbox"/>
            </ListItem>
        </div>
    );
}