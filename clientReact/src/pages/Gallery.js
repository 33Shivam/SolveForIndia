import React from "react";  

class Footer extends React.Component {
    render() {
        return (
        <div>   
            <header class = "flex header-sm">
            <div class = "container">
                <div class = "header-title">
                    <h1>Gallery</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rerum maxime enim odit illum in molestias beatae doloremque, ratione optio.</p>
                </div>
            </div>
        </header>
        

        
        <div id = "gallery" class = "py-4">
            <div class = "container">
                <div class = "gallery-row">
                    <div class = "gallery-item shadow">
                        <img src = "images/gallery-1.jpg" alt = "gallery img"/>
                        <span class = "zoom-icon">
                            <i class = "fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div class = "gallery-item shadow">
                        <img src = "images/gallery-2.jpg" alt = "gallery img"/>
                        <span class = "zoom-icon">
                            <i class = "fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div class = "gallery-item shadow">
                        <img src = "images/gallery-3.jpg" alt = "gallery img"/>
                        <span class = "zoom-icon">
                            <i class = "fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div class = "gallery-item shadow">
                        <img src = "images/gallery-4.jpg" alt = "gallery img"/>
                        <span class = "zoom-icon">
                            <i class = "fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div class = "gallery-item shadow">
                        <img src = "images/gallery-5.jpg" alt = "gallery img"/>
                        <span class = "zoom-icon">
                            <i class = "fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div class = "gallery-item shadow">
                        <img src = "images/gallery-6.jpg" alt = "gallery img"/>
                        <span class = "zoom-icon">
                            <i class = "fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div class = "gallery-item shadow">
                        <img src = "images/gallery-7.jpg" alt = "gallery img"/>
                        <span class = "zoom-icon">
                            <i class = "fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div class = "gallery-item shadow">
                        <img src = "images/gallery-8.jpg" alt = "gallery img"/>
                        <span class = "zoom-icon">
                            <i class = "fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div class = "gallery-item shadow">
                        <img src = "images/gallery-9.jpg" alt = "gallery img"/>
                        <span class = "zoom-icon">
                            <i class = "fas fa-search-plus"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
       

       
        <div id = "img-modal-box">
            <div id = "img-modal">
                <button type = "button" id = "modal-close-btn" class = "flex">
                    <i class = "fas fa-times"></i>
                </button>
                <button type = "button" id = "prev-btn" class = "flex">
                    <i class = "fas fa-chevron-left"></i>
                </button>
                <button type = "button" id = "next-btn" class = "flex">
                    <i class = "fas fa-chevron-right"></i>
                </button>
                <img src = "images/gallery-1.jpg"/>
            </div>
        </div>
      

        
        <section id = "popular" class = "py-4">
            <div class = "title-wrap">
                <span class = "sm-title">know about some coo destination</span>
                <h2 class = "lg-title">Popular Places</h2>
            </div>

            <div class = "popular-row">
                <div class = "popular-item shadow">
                    <img src = "images/popular-1.jpg" />
                    <div>
                        <span>Eiffel Tower, Paris</span>
                        <ul class = "rating flex">
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star-half-alt"></i></li>
                            <li>&nbsp;400 reviews</li>
                        </ul>
                        <p class = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quia!</p>
                    </div>
                </div>

                <div class = "popular-item shadow">
                    <img src = "images/popular-2.jpg" alt = ""/>
                    <div>
                        <span>Machu Picchu, Peru</span>
                        <ul class = "rating flex">
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star-half-alt"></i></li>
                            <li>&nbsp;400 reviews</li>
                        </ul>
                        <p class = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quia!</p>
                    </div>
                </div>

                <div class = "popular-item shadow">
                    <img src = "images/popular-3.jpg" alt = ""/>
                    <div>
                        <span>Acropolis, Athens</span>
                        <ul class = "rating flex">
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star-half-alt"></i></li>
                            <li>&nbsp;400 reviews</li>
                        </ul>
                        <p class = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quia!</p>
                    </div>
                </div>

                <div class = "popular-item shadow">
                    <img src = "images/popular-4.jpg" alt = ""/>
                    <div>
                        <span>Bali, Indonesia</span>
                        <ul class = "rating flex">
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star-half-alt"></i></li>
                            <li>&nbsp;400 reviews</li>
                        </ul>
                        <p class = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quia!</p>
                    </div>
                </div>

                <div class = "popular-item shadow">
                    <img src = "images/popular-5.jpg" alt = ""/>
                    <div>
                        <span>Dubai, United Arab Emirates</span>
                        <ul class = "rating flex">
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star-half-alt"></i></li>
                            <li>&nbsp;400 reviews</li>
                        </ul>
                        <p class = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quia!</p>
                    </div>
                </div>

                <div class = "popular-item shadow">
                    <img src = "images/popular-6.jpg" alt = ""/>
                    <div>
                        <span>Bhutan</span>
                        <ul class = "rating flex">
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star-half-alt"></i></li>
                            <li>&nbsp;400 reviews</li>
                        </ul>
                        <p class = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quia!</p>
                    </div>
                </div>

                <div class = "popular-item shadow">
                    <img src = "images/popular-7.jpg" alt = ""/>
                    <div>
                        <span>Havana, Cuba</span>
                        <ul class = "rating flex">
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star-half-alt"></i></li>
                            <li>&nbsp;400 reviews</li>
                        </ul>
                        <p class = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quia!</p>
                    </div>
                </div>

                <div class = "popular-item shadow">
                    <img src = "images/popular-8.jpg" alt = ""/>
                    <div>
                        <span>Moskva, Russia</span>
                        <ul class = "rating flex">
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star"></i></li>
                            <li><i class = "fas fa-star-half-alt"></i></li>
                            <li>&nbsp;400 reviews</li>
                        </ul>
                        <p class = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quia!</p>
                    </div>
                </div>
            </div>
        </section>
       
        </div>
        );
    }
}

export default Footer;