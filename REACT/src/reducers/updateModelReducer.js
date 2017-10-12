
var Tools = require('../services/Tools.js');
const updateModelReducer= (state={presentation:{},content_map:{}},action) => {
	console.log(action);
	switch (action.type) {
		case 'UPDATE_PRESENTATION':
			return {presentation : action.obj, content_map : state.content_map};

		case 'UPDATE_PRESENTATION_SLIDS':
			return ;

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