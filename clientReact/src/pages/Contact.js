import React from "react";  

class Contact extends React.Component {
    render() {  
        return (
            <div>
                <header class = "flex header-sm">
            <div class = "container">
                <div class = "header-title">
                    <h1>Contact</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rerum maxime enim odit illum in molestias beatae doloremque, ratione optio.</p>
                </div>
            </div>
        </header>
     

       
        <section id = "contact" class = "py-4">
            <div class = "container">
                <div class = "title-wrap">
                    <span class = "sm-title">get in touch with us</span>
                    <h2 class = "lg-title">contact us</h2>
                </div>

                <div class = "contact-row">
                    <div class = "contact-left">
                        <form class = "contact-form">
                            <input type = "text" class = "form-control" placeholder="Your name"/>
                            <input type = "email" class = "form-control" placeholder="Your email"/>
                            <textarea rows = "4" class = "form-control" placeholder="Your message" style = "resize: none;"></textarea>
                            <input type = "submit" class = "btn" value = "Send message"/>
                        </form>
                    </div>
                    <div class = "contact-right my-2">
                        <div class = "contact-item">
                            <span class = "contact-icon flex">
                                <i class = "fa fa-phone-alt"></i>
                            </span>
                            <div>
                                <span>Phone</span>
                                <p class = "text">+01-584-886-009</p>
                            </div>
                        </div>
                        <div class = "contact-item">
                            <span class = "contact-icon flex">
                                <i class = "fa fa-map-marked-alt"></i>
                            </span>
                            <div>
                                <span>Address</span>
                                <p class = "text">102 East 22nd Street, NY</p>
                            </div>
                        </div>
                        <div class = "contact-item">
                            <span class = "contact-icon flex">
                                <i class = "fa fa-envelope"></i>
                            </span>
                            <div>
                                <span>Message</span>
                                <p class = "text">info@tripboss.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </div>
            
        );
    }
}

export default Contact;
