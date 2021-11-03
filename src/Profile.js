import React from 'react';
import './Profile.css';
import Social from './Social'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

function Profile() {
    return (
        <>
            <div className="profile-wrap">
                <Avatar
                    className="profile-image"
                    alt="Matan Shriki"
                    src="../images/Matan.jpeg"
                    sx={{ width: 100, height: 150 }}
                />
                <div className="profile-header">
                    <h1>Matan Shriki</h1>
                    <h2 className="profile-sub-heading">Professional Services Engineer, Team Lead</h2>
                    <p>
                        Hello, <br/>
                        <p>I am a Professional Services Engineers team lead, working with JavaScript frameworks. <br/>
                            I am looking for a product management position in Tel Aviv and the area. For the past few years,
                            I’ve been working in positions between customers to developing.
                        </p>
                        <p>
                            I’m a constant learner so I keep on updating with new topics in the technologies I like.
                            I'm a highly motivated and hardworking person who decided to make a personal pivot by stepping into the fascinating world of product.
                        </p>
                        <br/>
                        <p>Have a look at my <a href="../Matan_Shriki_CV.docx">resume</a> for more details &#128512;</p>
                    </p>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
            <Button className="hire-me" variant="contained" >
                <a
                    className="App-link"
                    href="mailto:matan.shriki3@gmail.com"
                    target="_top"
                    rel="noopener noreferrer"
                >
                    Hire me!
                </a>
            </Button>
            <Social />
        </>
    );
}

export default Profile;