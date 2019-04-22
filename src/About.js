import React from 'react';
import computer from './assets/computer-crop.jpg';
import nice from './assets/nice-crop.jpg';

export const About = () => (
    <div>
        <h4>About us</h4>
        <p>Linden Creative is a trailblazing digital-media and entertainment company with a global audience across all platforms. 
            We deliver style and substance to an audience that's highly engaged across a variety of devices and destinations, from original video and features, to live 
            experiences and social storytelling. Our audience is comprised of determined dreamers who are smart and passionate, always seeking out the full potential in 
            every aspect of their lives. As the original next-generation's media company, we've changed the way content and storytelling speaks to and represents the digital age, 
            always sparking the conversations that matter most. Delivering on that mission, we drive intention-fueled branding and web development. We celebrate 
            imperfections, banish taboos, and always strive to be real and relatable — walking the walk in all that we do.</p>
        <div className="row">
            <div className="col-lg">
                <img className="about-picture" src={computer} alt="Computer" />
                <p></p>
                <p className="citation">Development is fun</p>
                <p> - Henrik, Director of University Recruitment</p>
            </div>
            <div className="col-lg">
                <img className="about-picture" src={nice} alt="Strategy" />
                <p></p>
                <p className="citation">Always aim for the stars</p>
                <p> - Edward, CEO</p>
            </div>
        </div>
    </div>
)