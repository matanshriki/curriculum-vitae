import React from 'react';
import Button from '@mui/material/Button';
import './Resume.css';
import Social from './Social'

function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <p>
                Click on the button below to get my updated resume.
            </p>
            <br></br>
            <Button className="resume-btn" variant="contained" downloadResume>
                <a
                    className="App-link"
                    href="../Matan_Shriki_CV.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Matan's resume
                </a>
            </Button>
            <br></br>
            <p><Social /></p>
        </div>
    );
}

export default Resume;