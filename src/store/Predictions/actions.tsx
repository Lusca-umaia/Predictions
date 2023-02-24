import { IActions } from "../../global";

import { IPredection } from "../../global";

export function setPredectionAction(valuesPredections: Array<IPredection>) {
    return {
        type: 'VALUE_PREDICTION',
        payload: valuesPredections
    }
}

export function setCityAction(city: string) {
    return {
        type: 'VALUE_CITY',
        payload: city
    }
}

export function setCityComparationAction(cityComparation: string) {
    return {
        type: 'VALUE_CITY_COMPARATION',
        payload: cityComparation
    }
}

export function setAllPredections(predectionsAll: [string, IPredection[]][]) {
    return {
        type: 'VALUE_PREDECTIONS_COMPARATION',
        payload: predectionsAll
    }
}