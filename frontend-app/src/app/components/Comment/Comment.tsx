import { Box } from '@mui/system';
import { List } from 'material-ui';
import './styles.css';
import * as React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

export default function Comment() {
  const komentar = 'nesto jako ludo';
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
                <ListItemText primary={komentar} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </nav>
    </div>
  );
}
