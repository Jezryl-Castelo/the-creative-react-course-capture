import React from 'react';
import home1 from '../img/home1.png';
import styled from 'styled-components';

const AboutSection = () => {
    return(
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to Make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dream</span> come </h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                    <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
                    <button>Contact</button>
                </div>
            </Description>
            <Image>
                <img src={home1} alt='camera man image'></img>
            </Image>
        </About>
    )
}

//Styled component
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: feComponentTransfer;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`

const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    font-weight: lighter;
`

const Image = styled.div`
    flex: 1;
    overflow: hidden; //with animation won't stretch image
    img {
        width: 100%;
        height: 80vh; //sets height
        object-fit: cover; //won't distort image
    }
`

const Hide = styled.div`
    overflow: hidden;
`
;

export default AboutSection;