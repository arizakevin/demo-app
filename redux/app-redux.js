import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as firebase from 'firebase';

//
// Initial State
//

const initialState = {
    favoriteAnimal: "duck",
    personData: { },
};

//
// Reducer
//

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "setFavoriteAnimal": 
            return {...state, favoriteAnimal: action.value}
        case "deleteFavoriteAnimal": 
            return {...state, favoriteAnimal: action.value}
        case "setPersonData":
            return {...state, personData: action.value}
        default: 
            return state;
    }
};

//
// Store
//

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export { store };

//
// Actions
//

const setFavoriteAnimal = (favoriteAnimal) => {
    return {
        type: "setFavoriteAnimal",
        value: favoriteAnimal
    };
}

const deleteFavoriteAnimal = () => {
    return {
        type: "deleteFavoriteAnimal",
        value: ''
    };
}

const setPersonData = (personData) => {
    return {
        type: "setPersonData",
        value: personData
    };
}

const watchPersonData = () => {
    return function(dispatch) {
        firebase.database().ref("Person").on("value", function (snapshot) {
            var personData = snapshot.val();
            dispatch(setPersonData(personData));
        }, function(error) {

        });
    };
}

export { 
    setFavoriteAnimal, 
    deleteFavoriteAnimal, 
    setPersonData, 
    watchPersonData 
};