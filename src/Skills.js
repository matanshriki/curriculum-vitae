import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function Skills() {
    return (
    <>
        <h1>Development Skills</h1>
        <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="JavaScript" src="../images/js.png" />
        </ListItemAvatar>
        <ListItemText
          primary="JavaScript"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                ReactJS
              </Typography>
              {" — Web application"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="HTML" src="../images/html.png" />
        </ListItemAvatar>
        <ListItemText
          primary="HTML"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                HTML5
              </Typography>
              {" — Building web pages"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="CSS" src="../images/css.png" />
        </ListItemAvatar>
        <ListItemText
          primary="CSS"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                CSS3
              </Typography>
              {' — UI projects using: Gulp, Sass, MUI'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="NodeJS" src="../images/nodejs.png" />
        </ListItemAvatar>
        <ListItemText
          primary="NodeJS"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Server
              </Typography>
              {" — Express"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </>
    );
}

export default Skills;