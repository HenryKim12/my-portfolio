import React from "react"
import "./Profile.css"

function Profile() {

    return (
        <div className="profile">

            <div className="info">
                <img className="pfp" src="https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.15752-9/314736323_869155377799460_1725947579623293951_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=P0OpKorbGHEAX_Vln8p&_nc_ht=scontent.fyvr4-1.fna&oh=03_AdRk2FSgAC8nC4pkBGVBGA42sJhMkC1UKpFn6CVGPjWrGA&oe=63914C11"/>
                <h1 className="name">Henry Kim</h1>
                <text className="info">University of British Colombia</text>
                <text className="info">Major in Computer Science</text>

                <ul className="socials">
                    <li className="socialsList">
                        <a href={"https://github.com/HenryKim12"} target="_blank">
                            <img height="60px" width="60px" className="socialsLogo" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img>
                        </a>
                    </li>

                    <li className="socialsList">
                        <a href={"https://www.linkedin.com/in/henry-kim-47889b208/"} target="_blank">
                            <img height="60px" width="60px" className="socialsLogo" src="https://cdn-icons-png.flaticon.com/512/61/61109.png"></img>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="aboutMe">
                <h1>About me</h1>
                <p>
                    Hello, my name is Henry Kim. I am a computer science major at the University of British Colombia 
                    expecting to graduate in 2024. I am interested in 
                </p>
            </div>

        </div>
    )
}

export default Profile