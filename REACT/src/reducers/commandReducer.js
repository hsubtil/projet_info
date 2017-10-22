const commandReducer= (state={cmdPres:{}},action) => {
	console.log(action);
	switch (action.type) {
		case 'COMMAND_PRESENTATION':
		    console.log("COMMAND_PRESENTATION");
		    const newState={cmdPres:action.obj};
		    return newState;
		default:
			return state;
	}	
}
export default commandReducer;	