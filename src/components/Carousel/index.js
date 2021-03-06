import React from 'react';
import Card from "../Card/index.js"
import CSS from "../Carousel/Carousel.module.css"



import Background from "/Users/sahel/Documents/portfolioWebsite/src/Assets/Images/portrait.png"


export default  class Carousel extends React.Component {
    constructor(props) {
        super(props)
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

    handleCardClick = (id ) => {
        console.log(id)
      let items = {...this.state.items};
      items[id].selected = items[id].selected ? false : true;
      items.ForEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        })
    }



    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }
 

    render() {
        return (

           
                <div className={CSS.justifyContentAround}>
                    {this.makeItems(this.state.items)}
                </div>
    
        
        )
    }
}

