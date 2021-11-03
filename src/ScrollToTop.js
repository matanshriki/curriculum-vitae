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


// import React, { useRef, useEffect } from "react";
// import Button from '@mui/material/Button';
// import './ScrollToTop.css';

// function ScrollToTop() {

//     const btn = useRef(null);

//     useEffect(() => {
//         window.addEventListener('scroll', (e) => {
//             console.log(btn.offsetTop)
//             console.log(e.position)
//             if (btn.offsetTop > e.position) {
//                 btn.style.display = "block";
//             } else {
//                 btn.style.display = "none";
//             }
//         })
//     });
//     function topFunction() {
//         window.scrollTo({
//             top: 0, behavior: 'smooth'
//         });
//     }
//     // function scrollFunction() {
//     //     var mybutton = document.querySelector('.scrollBtn');
//     //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     //         mybutton.style.display = "block";
//     //     } else {
//     //         mybutton.style.display = "none";
//     //     }
//     // }
//     return (
//         <div>
//             <Button ref={btn} className="scrollBtn"
//                 onClick={topFunction}
//                 variant="outlined"
//                 color="success">
//                 &#8593;
//             </Button>
//         </div>
//     );
// };

// export default ScrollToTop;