import React from "react";

class Footer extends React.Component {
    render() {
        return (
        <footer class = "py-4">
         <div>                           
        <div class = "container footer-row">
            <div class = "footer-item">
                <a href = "index.html" class = "site-brand">
                    Trip<span>Boss</span>
                </a>
                <p class = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptates maiores nam vitae iusto. Placeat rem sint voluptas natus exercitationem autem quod neque, odit laudantium reiciendis ipsa suscipit veritatis voluptate.</p>
            </div>
            </div>

            <div class = "footer-item">
                <h2>Follow us on: </h2>
                <ul class = "social-links">
                    <li>
                        <a href = "#">
                            <i class = "fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href = "#">
                            <i class = "fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href = "#">
                            <i class = "fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href = "#">
                            <i class = "fab fa-pinterest"></i>
                        </a>
                    </li>
                    <li>
                        <a href = "#">
                            <i class = "fab fa-google-plus"></i>
                        </a>
                    </li>
                </ul>
            </div>

            <div class = "footer-item">
                <h2>Popular Places:</h2>
                <ul>
                    <li><a href = "#">Thailand</a></li>
                    <li><a href = "#">Australia</a></li>
                    <li><a href = "#">Maldives</a></li>
                    <li><a href = "#">Switzerland</a></li>
                    <li><a href = "#">Germany</a></li>
                </ul>
            </div>

            <div class = "subscribe-form footer-item">
                <h2>Subscribe for Newsletter!</h2>
                <form class = "flex">
                    <input type = "email" placeholder="Enter Email" class = "form-control"/>
                    <input type = "submit" class = "btn" value = "Subscribe"/>
                </form>
            </div>
        </div>
    </footer>
        );
        }
        }

        export default Footer;