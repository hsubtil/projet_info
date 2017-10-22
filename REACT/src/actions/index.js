export const setSelectedSlid=(slid_obj)=>{
	return {
		type: 'UPDATE_SELECTED_SLID',
		obj:slid_obj
	};
}

export const updateContentMap=(content_map)=>{
	return {
		type: 'UPDATE_CONTENT_MAP',
		obj:content_map
	};
}

export const updatePresentation=(presentation)=>{
	return {
		type: 'UPDATE_PRESENTATION',
		obj:presentation
	};
}

export const updateSlid=(slid)=>{
	return {
		type: 'UPDATE_SLID',
		obj:slid
	};
}

export const updateSlidList=(slid)=>{
	return {
		type: 'UPDATE_PRESENTATION_SLIDS',
		obj:slid
	};
}

export const sendNavCmd=(command)=>{
	return {
		type: 'COMMAND_PRESENTATION',
		obj:command
	};
}

export const sendPresCmd=(command)=>{
	return {
		type: 'NAV_PRESENTATION',
		obj:command
	};
}