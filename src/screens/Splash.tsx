import React from 'react'

import '../styles/Index.css'
import '../styles/Splash.css'
import '../styles/Fonts.css'
import "../styles/Index.scss";

const Splash = () => {
    const fontStyle = {
        fontFamily: "icon-font",
        fontSize: "20px",
    };


    return (
        <view className='app-container' id='splash'>
            <text className='roboto-medium' style={{ fontSize: '50px', fontFamily: 'Poppins' }}>Hello</text>
            <text style={fontStyle}>
                {"hello world"}
            </text>
        </view>
    )
}

export default Splash