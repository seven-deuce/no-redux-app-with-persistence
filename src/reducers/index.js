import increment from "./increment";
import decrement from "./decrement";
import users from "./users";
import persist from "./persist";

function combineReducers(array) {
  return function(state, action) {
    for (let i = 0; i < array.length; ) {
      const result = array[i](state, action);
       if (Object.is(state, result)) {
          i++
          continue
        }
      else {
        // saving the new state (result) into the localStorage for persistence purpose
        persist.save(result);
        return result;
      }
      
    }
     persist.save(state)
       return state;
  };
}

const initialStateObject = {
  count: 0,
  users: []
};

export const initialState = persist.read(initialStateObject);

export const reducer = combineReducers([increment, decrement, users]);
