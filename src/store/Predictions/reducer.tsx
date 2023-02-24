import { IActions } from "../../global";

const PREDICTIONS_INITIAL_VALUES = {
    valuesPredections: null,
    city: '',
    cityComparation: '',
    predectionsAll: []
}

export default function predectionsReducer(state = PREDICTIONS_INITIAL_VALUES, action: IActions) {
    switch (action.type) {
        case "VALUE_PREDICTION":
            return {
                ...state,
                valuesPredections: action.payload
            }
        case "VALUE_CITY":
            return {
                ...state,
                city: action.payload
            }

        case "VALUE_CITY_COMPARATION":
            return {
                ...state,
                cityComparation: action.payload
            }

        case "VALUE_PREDECTIONS_COMPARATION":
            return {
                ...state,
                predectionsAll: action.payload
            }

        default:
            return state;
    }
}