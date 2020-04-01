import React from 'react'

const About = ({match}) => {
    return (
        <div>
            <h2>
                {console.log(match)}
                어바웃 {match.params.name}
            </h2>
        </div>
    )
}

export default About
