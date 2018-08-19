import React from 'react';
import ListItemIcon from "../../../node_modules/@material-ui/core/ListItemIcon/ListItemIcon";
import InboxIcon from "../../../node_modules/@material-ui/icons/MoveToInbox";
import ListItemText from "../../../node_modules/@material-ui/core/ListItemText/ListItemText";
import ListItem from "../../../node_modules/@material-ui/core/ListItem/ListItem";

export function MenuItems() {
    return (
        <ListItem button>
            <ListItemIcon>
                <InboxIcon/>
            </ListItemIcon>
            <ListItemText primary="Inbox"/>
        </ListItem>);
}