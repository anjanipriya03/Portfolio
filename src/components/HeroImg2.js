import "./HeroImg2Styles.css"

import React, {Component} from 'react'
import IntroImg from "../assets/pexels-tranmautritam-251225.jpg"

class HeroImg2 extends Component {
    render(){
        return (
            <div className="hero">
            <div className="mask">
             <img className="into-img"
             src={IntroImg} alt="IntroImg" />
            </div>
            <div className="content">
                
                <h1>{this.props.heading}</h1>
                {this.props.showEducation && (
                <div className="about-edu">
                    <h2>MTECH</h2>
          <p>
            IC Design and Technology <br/>
            Atal Bihari Vajpayee Indian Institute of Information Technology and Management, Gwalior<br/>
            <b>2025 - 2027</b>
          </p>

          <h2>BTECH</h2>
          <p>
            Electrical and Electronics Engineering<br/>
            Vardhaman College of Engineering, Hyderabad, Telangana<br/>
            <b>2020 - 2024</b>
          </p>

          <h2>INTERMEDIATE</h2>
          <p>
            Narayana Junior College<br/>
            <b>2018 - 2020</b>
          </p>
        </div>
                )}
                </div>
            </div>
          )
    }
 
}

export default HeroImg2