import produce from "immer";

export let defaultState = {
  WeatherInfo: {}
};

const AppReducers = (state = defaultState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case "ADD_POST":
        console.log("hhh payload", action.payload);
        draft.WeatherInfo = action.payload;
        console.log("hhh", state);
        break;
      default:
        return state;
    }
  });
// {
//   switch (action.type) {
//     case "example":
//       // const newState = { ...state };
//       // newState.exampleOne = action.payload;
//        console.log('hhh', Object.assign({}, state, { exampleOne: action.payload }));
//       return Object.assign({}, state, { exampleOne: action.payload })

//     default:
//       return state;
//   }
// };

export default AppReducers;
