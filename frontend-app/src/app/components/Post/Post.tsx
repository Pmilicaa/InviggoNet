import './styles.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

export default function Post(props) {
  return (
    <div className="cart">
      <nav aria-label="secondary mailbox folders">
        <Box
          sx={{
            bgcolor: 'background.paper',
            alignSelf: 'flex-end',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemText
                  primary={props.post.content}
                  secondary={new Date(
                    props.post.createdAt,
                  ).toLocaleDateString()}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </nav>
    </div>
  );
}
