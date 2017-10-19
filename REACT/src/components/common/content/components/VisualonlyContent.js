import React, { Component } from 'react';

class VisualonlyContent extends Component {
    constructor(props) {
        super(props);        
    }
  
  render() {
      let render_visual;
      switch(this.props.cont.type){
        case "img":
            render_visual=(
                    <img 
                        className='imgCard' 
                        src={this.props.cont.src}  
                    />
                );
        break;

        case "img_url" :
        render_visual=(
                    <img 
                        className='imgCard'
                        width="100%"  
                        src={this.props.cont.src}  
                    />

                );
        break;

        case "video":
              render_visual=(
                    <object  width="100%" height="100%"
                            data={this.props.cont.src}>
                    </object>

                );
        break;
              

        case "web":
        render_visual=(
                <iframe 
                    src={this.props.cont.src}  
                     width="100%" 
                     height="100%"
                     allowFullScreen
                />
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

export default VisualonlyContent;