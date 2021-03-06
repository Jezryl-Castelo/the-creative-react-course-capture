import React from 'react';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

const ServicesSection = () => {
    return(
    <div className="services">
        <div className="description">
            <h2>High <span>quality</span> services</h2>
                <div className="cards">
                
                <div className="card">
                    <div className="icon">
                        <img src={clock} alt='clock icon'/>
                        <h3>Efficient</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="card">
                    <div className="icon">
                        <img src={teamwork} alt='icon'/>
                        <h3>Team Work</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="card">
                    <div className="icon">
                        <img src={diaphragm} alt='icon'/>
                        <h3>Diaphragm</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="card">
                    <div className="icon">
                        <img src={money} alt='icon'/>
                        <h3>Money</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>

            </div>
         </div>
         <img src={home2} alt='camera' />
     </div>
    )
};

export default ServicesSection;