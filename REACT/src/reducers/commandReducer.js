const commandReducer= (state={cmdPres:{}},action) => {
	console.log(action);
	switch (action.type) {
		case 'COMMAND_PRESENTATION':
		    console.log("COMMAND_PRESENTATION");
		    const newState={cmdPres:action.obj};
		    return newState;
		case 'NAV_PRESENTATION':
		  console.log("NAV_PRESENTATION");
		  console.log(action.obj);
		  const newState2={cmdPres:action.obj};
		  return newState2;
		default:
			return state;
	}	
}
export default commandReducer;	