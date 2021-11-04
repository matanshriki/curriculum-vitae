import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './ScrollToTop.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function ScrollToTop() {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        console.log("scrolled: ", scrolled);
        if (scrolled > 20) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div>
            <Button className="scrollBtn"
                onClick={scrollToTop}
                style={{ display: visible ? 'inline' : 'none' }}
                variant="outlined"
                color="success">
                    <ArrowUpwardIcon/>
            </Button>
        </div>
    );
}

export default ScrollToTop;