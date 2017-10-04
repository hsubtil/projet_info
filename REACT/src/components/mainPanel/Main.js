import React from 'react';
import './main.css';
import '../../lib/bootstrap-3.3.7/dist/css/bootstrap.min.css';
import * as contentMapTmp from '../../source/contentMap.json';
import Content from '../common/content/containers/Content';
import BrowseContentPanel from '../browseContentPanel/containers/BrowseContentPanel'

//<Content id = "premiere slide" src="https://www.youtube.com/embed/gfe4emhwQkE" type ="video" title ="Slide lalalala" onlyContent = "true"/>
//				 	<Content id = "deuxieme slide" src ="https://www.w3schools.com/css/trolltunga.jpg" type ="img" title ="Slide lalalala" onlyContent = "false"/>
//					<Content id = "premiere slide" src ="https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal" type ="web" title ="Slide lalalala" onlyContent = "false"/>

export default class Main extends React.Component{
 constructor(props) {
 super(props);

 //console.log(contentMapTmp);

 	this.state = {
 			contentMap:contentMapTmp,
            id : this.props.id,
            src : this.props.src,
            type : this.props.type,
            title : this.props.title,
            onlyContent : this.props.onlyContent,
        };
 	}

 render() {

 	 console.log(this.state.contentMap);

	 return (

		 <div className='container-fluid height-100'>
			 <div className="row height-100">
				 <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
				 	<h1>Slide display</h1>
				 	

				 </div>
				<div className='col-md-6 col-lg-6 height-100'>

				</div>
				<div className='col-md-3 col-lg-3 height-100'>
					<BrowseContentPanel contentMapList = {this.state.contentMap} />
				</div>
			 </div>
		 </div>
	 	);
	 }
}