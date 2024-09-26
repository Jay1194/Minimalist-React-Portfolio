import React from 'react';
import '../css/AskMe.css';

const AskMe = () => (
  <div className="ama-container">
    <button onClick={() => window.history.back()} className="back-button">Back</button>
    <div className="ama-content">
      <div className="qa">
        <h3>How do you balance design and functionality in your projects?</h3>
        <p>I prioritize user experience by ensuring the design is both visually appealing and functional. This involves regular testing and gathering feedback to refine the design while maintaining strong functionality. Balancing aesthetics and usability is achieved through iterative design and development.</p>
      </div>
      <div className="qa">
        <h3>How do you handle project scope changes or unexpected challenges?</h3>
        <p>When facing scope changes, I evaluate their impact on the project timeline and resources and communicate these changes with stakeholders. For unexpected challenges, I break down the problem, explore solutions, and adjust the project plan accordingly. Keeping the team informed and adaptable is crucial.</p>
      </div>
      <div className="qa">
        <h3>How do you stay updated with the latest trends in web development?</h3>
        <p>I follow tech blogs, industry leaders on social media, and subscribe to newsletters. I also take online courses and attend meetups or conferences to keep my skills and knowledge current.</p>
      </div>
      <div className="qa">
        <h3>What makes you so confident?</h3>
        <p>I've made just about every mistake you can make. Every time I've learned from it and gotten better. (Cliche, I know, but true)</p>
      </div>
      <div className="qa">
        <h3>What are your weaknesses?</h3>
        <p>Sometimes I overthink. Sometimes that's a good thing, but most times it's better to move fast and get feedback. I'm working on this.</p>
      </div>
      <div className="qa">
        <h3>What are your strengths?</h3>
        <p>Two things:</p>
        <p>Embracing Adaptability: I excel in dynamic environments where requirements change frequently. My flexibility allows me to quickly adjust to new tools and project needs.</p>
        <p>Effective Collaboration: I value team input and communicate clearly. This approach ensures we make informed decisions and work well together.</p>
      </div>
    </div>
  </div>
);

export default AskMe;
