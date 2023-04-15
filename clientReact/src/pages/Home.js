import React from 'react';


class home extends React.Component {
    render() {
        return <div>
        <header class="flex">
  <div class="container">
    <div class="header-title">
      <h1>Leave Your Footprints</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rerum maxime enim odit illum in molestias beatae doloremque, ratione optio.</p>
    </div>
    <div class="header-form">
      <h2>Choose your Travel location:</h2>
      <form class="flex">
        <input type="text" class="form-control" placeholder="Destination name" />
        <input type="date" class="form-control" placeholder="Date" />
        <input type="number" class="form-control" placeholder="Price ($)" />
        <input type="submit" class="btn" value="Search" />
      </form>
    </div>
  </div>
</header>
       

        
        <section id = "featured" class = "py-4">
            <div class = "container">
                <div class = "title-wrap">
                    <span class = "sm-title">know about some places before your travel</span>
                    <h2 class = "lg-title">featured places</h2>
                </div>

                <div class = "featured-row">
                    <div class = "featured-item my-2 shadow">
                        <img src = "images/featured-reo-de-janeiro-brazil.jpg" alt = "featured place"/>
                        <div class = "featured-item-content">
                            <span>
                                <i class = "fas fa-map-marker-alt"></i>
                                Reo De Janeiro, Brazil
                            </span>
                            <div>
                                <p class = "text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed dignissimos libero soluta illum, harum amet excepturi sit?</p>
                            </div>
                        </div>
                    </div>

                    <div class = "featured-item my-2 shadow">
                        <img src = "images/featured-north-bondi-australia.jpg" alt = "featured place"/>
                        <div class = "featured-item-content">
                            <span>
                                <i class = "fas fa-map-marker-alt"></i>
                                North Bondi, Australia
                            </span>
                            <div>
                                <p class = "text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed dignissimos libero soluta illum, harum amet excepturi sit?</p>
                            </div>
                        </div>
                    </div>

                    <div class = "featured-item my-2 shadow">
                        <img src = "images/featured-berlin-germany.jpg" alt = "featured place"/>
                        <div class = "featured-item-content">
                            <span>
                                <i class = "fas fa-map-marker-alt"></i>
                                Berlin, Germany
                            </span>
                            <div>
                                <p class = "text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed dignissimos libero soluta illum, harum amet excepturi sit?</p>
                            </div>
                        </div>
                    </div>

                    <div class = "featured-item my-2 shadow">
                        <img src = "images/featured-khwaeng-wat-arun-thailand.jpg" alt = "featured place"/>
                        <div class = "featured-item-content">
                            <span>
                                <i class = "fas fa-map-marker-alt"></i>
                                Khwaeng wat arun, thailand
                            </span>
                            <div>
                                <p class = "text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed dignissimos libero soluta illum, harum amet excepturi sit?</p>
                            </div>
                        </div>
                    </div>

                    <div class = "featured-item my-2 shadow">
                        <img src = "images/featured-rome-italy.jpg" alt = "featured place"/>
                        <div class = "featured-item-content">
                            <span>
                                <i class = "fas fa-map-marker-alt"></i>
                                Rome, Italy
                            </span>
                            <div>
                                <p class = "text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed dignissimos libero soluta illum, harum amet excepturi sit?</p>
                            </div>
                        </div>
                    </div>

                    <div class = "featured-item my-2 shadow">
                        <img src = "images/featured-fuvahmulah-maldives.jpg" alt = "featured place"/>
                        <div class = "featured-item-content">
                            <span>
                                <i class = "fas fa-map-marker-alt"></i>
                                fuvahmulah, maldives
                            </span>
                            <div>
                                <p class = "text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed dignissimos libero soluta illum, harum amet excepturi sit?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       

        
        <section id = "services" class = "py-4">
            <div class = "container">
                <div class = "title-wrap">
                    <span class = "sm-title">know about services that we offer</span>
                    <h2 class = "lg-title">Our services</h2>
                </div>

                <div class = "services-row">
                    <div class = "services-item">
                        <span class = "services-icon">
                            <i class = "fas fa-hotel"></i>
                        </span>
                        <h3>Luxurious Hotel</h3>
                        <p class = "text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quo, totam repellat velit, dignissimos sequi error a minima architecto fugit nisi dolorum repellendus?</p>
                        <a href = "#" class = "btn">Read more</a>
                    </div>

                    <div class = "services-item">
                        <span class = "services-icon">
                            <i class = "fas fa-map-marked-alt"></i>
                        </span>
                        <h3>Trave Guide</h3>
                        <p class = "text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quo, totam repellat velit, dignissimos sequi error a minima architecto fugit nisi dolorum repellendus?</p>
                        <a href = "#" class = "btn">Read more</a>
                    </div>

                    <div class = "services-item">
                        <span class = "services-icon">
                            <i class = "fas fa-money-bill"></i>
                        </span>
                        <h3>Suitable Price</h3>
                        <p class = "text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quo, totam repellat velit, dignissimos sequi error a minima architecto fugit nisi dolorum repellendus?</p>
                        <a href = "#" class = "btn">Read more</a>
                    </div>
                </div>
            </div>
        </section>
        

        
        <section id = "testimonials" class = "py-4">
            <div class = "container">
                <div class = "title-wrap">
                    <span class = "sm-title">what our clients say about us</span>
                    <h2 class = "lg-title">testimonials</h2>
                </div>

                <div class = "test-row">
                    <div class = "test-item">
                        <p class = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda blanditiis, asperiores, velit iste eos officiis tempora magni quaerat quo consectetur expedita cum recusandae facere nam voluptate minus iusto eum. Delectus!</p>
                        <div class = "test-item-info">
                            <img src = "images/test-1.jpg" alt = "testimonial"/>
                            <div>
                                <h3>Kevin Wilson</h3>
                                <p class = "text">Trip to Brazil</p>
                            </div>
                        </div>
                    </div>

                    <div class = "test-item">
                        <p class = "text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ut dolores tenetur harum deserunt. Maxime tenetur consectetur recusandae nobis fugit iusto natus quibusdam nulla!</p>
                        <div class = "test-item-info">
                            <img src = "images/test-2.jpg" alt = "testimonial"/>
                            <div>
                                <h3>Ben Davis</h3>
                                <p class = "text">Trip to Maldives</p>
                            </div>
                        </div>
                    </div>

                    <div class = "test-item">
                        <p class = "text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem sapiente amet expedita quae autem deleniti quo magni numquam facilis soluta dicta, praesentium ipsum, quos optio sed quibusdam! Reprehenderit recusandae provident id nemo!</p>
                        <div class = "test-item-info">
                            <img src = "images/test-3.jpg" alt = "testimonial"/>
                            <div>
                                <h3>Jaura Jones</h3>
                                <p class = "text">Trip to Thailand</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        
        <section id = "video">
            <div class = "video-wrapper flex">
                <video loop>
                    <source src = "videos/video-section.mp4" type = "video/mp4"/>
                </video>
                <button type = "button" id = "play-btn">
                    <i class = "fas fa-play"></i>
                </button>
            </div>
        </section>
        


        </div>
        
    }
}

export default home;