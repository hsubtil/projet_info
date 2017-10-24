import React, { Component } from 'react';
//import Iframe from 'react-iframe';

class Visualfull extends Component {
    constructor(props) {
        super(props);        
    }
  
  render() {
      let render_visual;
      switch(this.props.cont.type){
        case "img":
            render_visual=(
                <div 
		    draggable="true"
		    ondragstart="this.props.drag(event)">
                    <h5>Title : {this.props.cont.title}</h5>
                    <h6>ID : {this.props.cont.id}</h6>
                    <img 
                        className='imgCard' 
                        src={this.props.cont.src}  
                    />
                </div>
                );
        break;

        case "img_url" :
        render_visual=(
                <div
		    draggable="true"
		    ondragstart="this.props.drag(event)">
                    <h5>Title : {this.props.cont.title}</h5>
                    <h6>ID : {this.props.cont.id}</h6>
                    <img 
                        className='imgCard'
                        width="100%"  
                        src={this.props.cont.src}  
                    />
                </div>

                );
        break;

        case "video":
              render_visual=(
                 <div 
		    draggable="true"
		    ondragstart="this.props.drag(event)">
                    <h5>Title : {this.props.cont.title}</h5>
                    <h6>ID : {this.props.cont.id}</h6>
                    <object  width="100%" height="100%"
                            data={this.props.cont.src}>
                    </object>
                </div>

                );
        break;
              

        case "web":
        render_visual=(
        <div 
		    draggable="true"
		    ondragstart="this.props.drag(event)">
                <h5>Title : {this.props.cont.title}</h5>
                <h6>ID : {this.props.cont.id}</h6>
                <iframe 
		     src={this.props.cont.src}  
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