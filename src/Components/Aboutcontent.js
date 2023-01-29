import "./AboutcontentStyle.css"

import React from 'react'
import { Link } from "react-router-dom"
// import React1 from "../assets/react1.jpg"
// import React2 from "../assets/react2.webp"

const Aboutcontent = () => {
    return (
        <div className="about">

            <div className="left">
                <p>I like to create solid and responsive frontend products with great user experiences. Seeking a challenging position in the software domain where I can utilize my extensive knowledge of the area and also possess a positive attitude towards organizational goals.</p>
                <p><b>Technical Skills:</b> HTML, CSS, JavaScript, React JS, Bootstrap, SQL, Unix/Linux, Git/Github, VS Code </p>
                <div className="skill">
                    <Link to="/Contact">
                        <button className="btn">Contact</button>
                    </Link>
                </div>
            </div>

            {/* <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React1} className="img" alt="true" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={React2} className="img" alt="true" />
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default Aboutcontent