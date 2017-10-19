
var Tools = require('../services/Tools.js');
const updateModelReducer= (state={presentation:{}},action) => {
	console.log(action);
	switch (action.type) {
		case 'UPDATE_PRESENTATION':
			return {presentation : action.obj, content_map : state.content_map};

		case 'UPDATE_PRESENTATION_SLIDS':
			var pres = {};
			var newSlidArray =[];
			for (var i=0 ;i<Object.keys(state.presentation.slidArray).length;i++){
				if(state.presentation.slidArray[i]['id']== action.obj.id)
		    	{	
		    			newSlidArray[i]= {
		                id : action.obj.id, 
		                title :action.obj.title, 
		                txt :action.obj.txt,
		                content_id :action.obj.content_id,
		                
		         	}
		        }  
		        else {
		        		newSlidArray[i]= {
		                id : state.presentation.slidArray[i]['id'], 
		                title :state.presentation.slidArray[i]['title'], 
		                txt :state.presentation.slidArray[i]['txt'],
		                content_id :state.presentation.slidArray[i]['content_id'],
		                
		         	}
		        }

		        	
      		}

      		pres = {
      			id : state.presentation.id,
      			title : state.presentation.title,
      			description : state.presentation.description,
      			slidArray : newSlidArray,
      		}
			return {presentation : pres, content_map : state.content_map};

		case 'UPDATE_CONTENT_MAP':
			return {presentation : state.presentation, content_map : action.obj};
		
		case 'ADD_CONTENT':
			state.content_map.push(action.obj);
			return {presentation : state.presentation, content_map : state.content_map}; //TO DO

		default:
			return state;
	}
}

export default updateModelReducer;