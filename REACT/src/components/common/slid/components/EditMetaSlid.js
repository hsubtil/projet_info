import React from 'react';
import './editMetaSlid.css'
import Content from '../../../common/content/containers/Content';



class EditMetaSlid extends React.Component{
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
					 value={this.props.slid.title}
				 />
			<label htmlFor="currentSlideText">Text</label>
				 <textarea
					 rows="5"
					 type="text"
					 className="form-control"
					 id="currentSlideText"
					 onChange={this.props.handleChangeTxt} 
					 value={this.props.slid.txt}>
			 	</textarea>
			 	
			  <Content 
                contentMap = {this.props.contentMap} 
                content_id = {this.props.slid.content_id}
                onlyContent = "true"
            /> 
		 </div>
 		); 
	}
}

export default EditMetaSlid;