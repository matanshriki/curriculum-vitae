import React from 'react';
import './Profile.css';
import Social from './Social'


function Profile() {
    return (
    <>
        <h1>Matan Shriki</h1>
        <h2 className="profile-sub-heading">Professional Services Engineer, Team Lead</h2>
            <p>
                Hi, <br></br>
                <p>I am a Full Stack Engineer, currently working with JavaScript frameworks. <br></br>
                I am looking for a product management position in Tel Aviv and the area. For the past few years, 
                I’ve been working in positions between customers to developing.</p>
                <p>
                I’m a constant learner so I keep on updating with new topics in the technologies I like. 
                As well as a highly motivated and hardworking person who decided to make a personal pivot by stepping into the fascinating world of product.
                </p>
                <br></br>
                <p>Have a look at my resume for more details &#128512;</p>
            </p>
            <Social/>
    </>
    );
}

export default Profile;