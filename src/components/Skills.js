import React from 'react';

function Skills() {
    return (
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <div className="skill-list">
                <div className="skill-item">
                    <h3>JavaScript</h3>
                    <div className="skill-bar"><div className="skill-level" style={{ width: '90%' }}></div></div>
                </div>
                <div className="skill-item">
                    <h3>React</h3>
                    <div className="skill-bar"><div className="skill-level" style={{ width: '80%' }}></div></div>
                </div>
                <div className="skill-item">
                    <h3>HTML/CSS</h3>
                    <div className="skill-bar"><div className="skill-level" style={{ width: '95%' }}></div></div>
                </div>
                <div className="skill-item">
                    <h3>Python</h3>
                    <div className="skill-bar"><div className="skill-level" style={{ width: '85%' }}></div></div>
                </div>
                <div className="skill-item">
                    <h3>NodeJS</h3>
                    <div className="skill-bar"><div className="skill-level" style={{ width: '70%' }}></div></div>
                </div>
                <div className="skill-item">
                    <h3>Java</h3>
                    <div className="skill-bar"><div className="skill-level" style={{ width: '45%' }}></div></div>
                </div>
                
            </div>
        </section>
    );
}

export default Skills;
