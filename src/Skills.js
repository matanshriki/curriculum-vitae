import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import './Skills.css';

function Skills() {
    return (
        <>
            <h1>Development Skills</h1>
            <List className="dev-list" sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
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
                                    VanillaJS, TypeScript, jQuery, ReactJS
              </Typography>
                                {" — Developing Web applications using ReactJS framework."}
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
                                {" — Building web and landing pages."}
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
                                {' — UI projects using: Gulp, Sass, MUI, Styled-Components.'}
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
                                {" — Backend development - RESTful APIs, Data-Bases, Express."}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </List>

            <h1 className="skills-sub">Other Skills</h1>
            
            <List className="other-list" sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="JavaScript" src="../images/leadership.png" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Team Leadership"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Leadership
              </Typography>
                                {" — Leading the Professional Service team in EMEA."}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Creativity" src="../images/creativity.jpeg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Creativity"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Creativity
              </Typography>
                                {" — Providing creative solutions for customers."}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Problem Solving" src="../images/problem-solving.jpeg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Problem Solving"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Problem solving
              </Typography>
                                {' — Resolves customer complaints with software and responds to suggestions for improvements and enhancements.'}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Strategic Thinking" src="../images/Strategic-Thinking.jpeg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Strategic Thinking"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Strategic Thinking
              </Typography>
                                {" — Work with the leadership team to provide strategic direction for the existing toolset."}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="User Experience" src="../images/ux.png" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="User Experience"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    User Experience
              </Typography>
                                {' — UI projects using UX/UI tools such as Abstract, InvisionApp.'}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Analytical-skills" src="../images/Analytical.jpeg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Analytical Skills"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Analytical
              </Typography>
                                {' — Analyze customer behaviour and usage.'}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Project Management" src="../images/pm.jpeg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Project Management"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Project Management
              </Typography>
                                {' — Managing full PS cycle from the scoping through planning to execution.'}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </List>
        </>
    );
}

export default Skills;