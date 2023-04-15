import React from "react";


class About extends React.Component {
    render() {
        return(<div>
            
        <header class = "flex header-sm">
            <div class = "container">
                <div class = "header-title">
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rerum maxime enim odit illum in molestias beatae doloremque, ratione optio.</p>
                </div>
            </div>
        </header>
       

        
        <section id = "about" class = "py-4">
            <div class = "container">
                <div class = "title-wrap">
                    <span class = "sm-title">things to know about us</span>
                    <h2 class = "lg-title">our story</h2>
                </div>

                <div class = "about-row">
                    <div class = "about-left my-2">
                        <img src = "images/about-img.jpg" alt = "about img"/>
                    </div>
                    <div class = "about-right">
                        <h2>15 Years of Experience</h2>
                        <p class = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae sed aperiam qui repudiandae earum voluptatem. Modi at inventore omnis veniam necessitatibus exercitationem vel nesciunt delectus ex officiis, culpa doloremque odit illo saepe placeat. Delectus consequuntur reprehenderit omnis accusantium officiis!</p>
                        <p class = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique explicabo blanditiis quidem consequuntur qui quaerat fuga iste tenetur consequatur porro. Aliquam maiores alias doloribus at quisquam quo numquam perferendis. Odit!</p>
                    </div>
                </div>
            </div>
        </section>
        

       
        <section id = "facts" class = "py-4 flex">
            <div class = "container">
                <div class = 'title-wrap'>
                    <span class = "sm-title">know some facts about our agency</span>
                    <h2 class = "lg-title">fun facts</h2>
                </div>

                <div class = "facts-row">
                    <div class = "facts-item">
                        <span class = "fas fa-camera-retro facts-icon"></span>
                        <div class = "facts-info">
                            <strong>1220</strong>
                            <p class = "text">photos taken</p>
                        </div>
                    </div>

                    <div class = "facts-item">
                        <span class = "fas fa-umbrella-beach  facts-icon"></span>
                        <div class = "facts-info">
                            <strong>450</strong>
                            <p class = "text">beaches visited</p>
                        </div>
                    </div>

                    <div class = "facts-item">
                        <span class = "fas fa-mountain facts-icon"></span>
                        <div class = "facts-info">
                            <strong>84</strong>
                            <p class = "text">mountains climbed</p>
                        </div>
                    </div>

                    <div class = "facts-item">
                        <span class = "fas fa-ship facts-icon"></span>
                        <div class = "facts-info">
                            <strong>120</strong>
                            <p class = "text">cruises organized</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </div>
        );
    }}


export default About;