const bookReducer = (state , action) => {
    switch(action.type){
        case "CURRENTY_READING":
            return {
                ...state,
                currentlyReading: [action.payload , ...state.currentlyReading]
            };
        case "WANT_TO_READ":
            return {
                ...state,
                wantToRead: [action.payload , ...state.wantToRead]
            };
        case "READ":
            return {
                ...state,
                read: [action.payload , ...state.read]
            };
        case "NONE":
            return state;    
        default:
            return state;
    }
}

export default bookReducer;