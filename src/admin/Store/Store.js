

var redux =require ('redux')
const reducer1InitialState = {
    check:false
}
const reducer1 = (state = reducer1InitialState, action) => {
    switch (action.type) {
        case 'ischeck':
            return {...state,check:action.a}
        
        default:
            return state
    }
}
const store = redux.createStore(reducer1)
export default store;