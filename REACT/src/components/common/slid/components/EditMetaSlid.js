import React from 'react';
import './editMetaSlid.css'
import Content from '../../../common/content/containers/Content';



export default class EditMetaSlid extends React.Component{
	 constructor(props) {
	 super(props);
 }

 render(){
	 return (
		 <div className="form-group">
			 <label htmlFor="currentSlideTitle">Title </label>
				 <input
					 type="text"
					 className="form-control"
					 id="currentSlideTitle"
					 onChange={this.props.handleChangeTitle}
					 value={this.props.title}
				 />
			<label htmlFor="currentSlideText">Text</label>
				 <textarea
					 rows="5"
					 type="text"
					 className="form-control"
					 id="currentSlideText"
					 onChange={this.props.handleChangeTxt} 
					 value={this.props.txt}>
			 	</textarea>
			  <Content 
                src ={this.props.src} 
                type ={this.props.type} 
                onlyContent = "true"
            /> 
		 </div>
 ); }}