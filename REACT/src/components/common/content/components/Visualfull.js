import React, { Component } from 'react';
//import Iframe from 'react-iframe';

class Visualfull extends Component {
    constructor(props) {
        super(props);        
    }
  
  render() {
      let render_visual;
      switch(this.props.type){
        case "img":
            render_visual=(
                <div>
                    <h5>Title : {this.props.title}</h5>
                    <h6>ID : {this.props.id}</h6>
                    <img 
                        className='imgCard' 
                        src={this.props.src}  
                    />
                </div>
                );
        break;

        case "img_url" :
        render_visual=(
                <div>
                    <h5>Title : {this.props.title}</h5>
                    <h6>ID : {this.props.id}</h6>
                    <iframe 
                    src={this.props.src}  
                         width="100%" 
                         height="100%"
                         allowFullScreen
                    />
                </div>

                );
        break;

        case "video":
              render_visual=(
                 <div>
                    <h5>Title : {this.props.title}</h5>
                    <h6>ID : {this.props.id}</h6>
                    <object  width="100%" height="100%"
                            data={this.props.src}>
                    </object>
                </div>

                );
        break;
              

        case "web":
        render_visual=(
        <div>
                <h5>Title : {this.props.title}</h5>
                <h6>ID : {this.props.id}</h6>
                <iframe 
                    src={this.props.src}  
                     width="100%" 
                     height="100%"
                     allowFullScreen
                />
        </div>
                );
        break;
      
      
}
    return (
            <div className="thumbnail">
                {render_visual}
            </div>            
    );
  }
}

export default Visualfull;