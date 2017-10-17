const commandReducer= (state={command:{}},action) => {
	console.log(action);
	switch (action.type) {
		case 'COMMAND_PRESENTATION':
		  //TO DO
		     return 
		default:
			return state;
	}	
}
export default commandReducer;	