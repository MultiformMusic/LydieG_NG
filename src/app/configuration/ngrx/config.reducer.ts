import { ConfigActions,
         SET_LANGUAGE
        } from './config.actions';


// interface state du reducer
export interface ConfigState {

    language: string;
}

// state initial
const INITIAL_STATE: ConfigState = {

    language: navigator.language
}

// reducer rss => modifie le state suivant action reçue
export function configReducer(state = INITIAL_STATE, action: ConfigActions) {

    switch(action.type) {
    
        case SET_LANGUAGE:

            return {
                ...state,
                language: action.payload
            };

        default:

            return state;
    }

}

// function d'aide pour accèder à l'état du state
export const getLanguage = (state: ConfigState) => state.language;