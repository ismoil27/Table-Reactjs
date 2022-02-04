import React from "react";
import phone from "../../images/phone-icon.png"
import email from "../../images/mail-icon.png"

const ImageDetail = (props) =>{
    return (
        <section>
        <div className="contact-card">
            <img src={props.imageSource} alt="" />
            <h3>{props.title}</h3>
            <div className="info-group">
                <img src={phone} alt="" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={email} alt="" />
                <p>{props.email}</p>
            </div>
        </div>
        </section>  
    )
}

export default ImageDetail
