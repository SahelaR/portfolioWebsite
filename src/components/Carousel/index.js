import React from 'react';

import Background from "/Users/sahel/Documents/portfolioWebsite/src/Assets/Images/landing.png"



class Carousel extends React.Component {
    constructor(props) {
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Talent Growth',
                    subTtitle: 'React.js, Node,js, Mongodb',
                    imgSrc: Background,
                    link: 'https://github.com/SahelaR/SoC-week-8-ProjectWeekFrontEnd',
                    selected: false
                },
                  {
                    id: 1,
                    title: 'BrumGo',
                    subTtitle: 'React-Native',
                    imgSrc: Background,
                      link: 'https://github.com/SchoolOfCode/final-project-app-brumgo-front-end',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Sahela Rani',
                    subTtitle: 'React.js',
                    imgSrc: Background,
                    link: 'https://github.com/SahelaR/portfolioWebsite',
                    selected: false
                }

            ]
        }

    }

    render() {
        return (
            <p>Projects</p>
        )
    }
}