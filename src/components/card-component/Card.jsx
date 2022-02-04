import React from "react";
import ImageDetail from './ImageDetail'

export default  function Cards (props){
    return(
        <div className="cards">
            <ImageDetail title="Felix" 
            imageSource={require('../../images/felix.png')} 
            phone="(212) 555-4567"
            email="thecat@hotmail.com"
            />
            <ImageDetail title="Fluffykins" 
            imageSource={require('../../images/fluffykins.png')} 
            phone="(212) 555-2345"
            email="fluff@me.com"
            />
            <ImageDetail title="Pumpkin" 
            imageSource={require('../../images/pumpkin.png')} 
            phone="(0800) CAT KING"
            email="pumpkin@gmail.com"
            />
             <ImageDetail title="Mr-Whiskerson" 
            imageSource={require('../../images/mr-whiskerson.png')} 
            phone= "(212) 555-1234" 
            email= "mr.whiskaz@catnap.meow"
            />
        </div>
    )
}