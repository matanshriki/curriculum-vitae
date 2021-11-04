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
                    <h2 className="profile-sub-heading">Team Lead, Professional Services, EMEA</h2>
                    <p>
                        Hello, recruiter, <br />
                        <p> My name is Matan and I am a Professional Services Engineers Team Lead, working with JavaScript frameworks.<br />
                            I am looking for a product management position in Tel Aviv and the area.
                            For the past few years, I’ve been working in positions between customers to developing.
                        </p>
                        <p>
                            I’m a constant learner, therefore, I keep updating with new topics in the technologies I like.
                            I'm a highly motivated and hardworking person who decided to make a personal pivot by stepping into the fascinating world of products.
                       </p>
                        <br />
                        <p>Have a look at my <a href="../Matan_Shriki_CV.docx">resume</a> for more details &#128512;</p>
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
            <h4 className="contact-me">Contact me via</h4>
            <Social />
        </>
    );
}

export default Profile;