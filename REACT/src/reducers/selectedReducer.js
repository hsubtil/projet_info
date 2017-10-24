const selectedReducer= (state={slid:{}},action) => {
	console.log(action);
	switch (action.type) {
		case 'UPDATE_SELECTED_SLID':
			const newState1={slid:action.obj};
			return newState1;
		case 'UPDATE_SLID':
			console.log("UPDATE SLID");
			const newState2={slid:action.obj};			
			console.log(newState2);
			return newState2;
		case 'UPDATE_DRAG_CONTENT' : 
		  const newDragContent = {slid : state.slid, content : action.obj};
		  return newDragContent;
		default:
			return state;
	}	
}
export default selectedReducer;	