const bookReducer = (state, action) => {
  switch (action.type) {
    case "CURRENTY_READING":
        return {
          ...state,
          read: state.read.filter((book) => book.id !== action.payload.id),
          wantToRead: state.wantToRead.filter((book) => book.id !== action.payload.id),
          currentlyReading: [action.payload, ...state.currentlyReading],
        };
    case "WANT_TO_READ":
        return {
          ...state,
          currentlyReading: state.read.filter((book) => book.id !== action.payload.id),
          read: state.wantToRead.filter((book) => book.id !== action.payload.id),
          wantToRead: [action.payload, ...state.wantToRead],
        };
    case "READ":
        return {
          ...state,
          wantToRead: state.read.filter((book) => book.id !== action.payload.id),
          currentlyReading: state.wantToRead.filter((book) => book.id !== action.payload.id),
          read: [action.payload, ...state.read],
        };

    case "NONE":
        return {
            ...state,
            wantToRead: state.read.filter((book) => book.id !== action.payload),
            currentlyReading: state.wantToRead.filter((book) => book.id !== action.payload),
            read: state.read.filter((book) => book.id !== action.payload),
          };
      
    default:
      return state;
  }
};

export default bookReducer;
