import React from 'react';
import './Social.css';

function Social() {
    return (
        <div className="social">
            <ul className="social-list">
                <li>
                    <a
                        href="https://www.facebook.com/matan.shriki.5"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="../images/fb.png" alt="facebook"/>
                    </a>
                </li>
                <li>
                    <a
                        href="https://linkedin.com/in/matan-shriki"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="../images/linkedin.png" alt="linkedin"/>
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/matanshriki"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="../images/github.png" alt="github"/>
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:matan.shriki3@gmail.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="../images/gmail.png" alt="gmail"/>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Social;