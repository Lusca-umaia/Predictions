export interface IActions {
    type: string,
    payload: any
}

export interface IState {
    predection: {
        city: string
        valuesPredections: Array<IPredection>
        cityComparation: string
        predectionsAll: [string, IPredection[]][]
    }
}

export interface IPredection {
    main: { temp_max: number, temp_min: number }
    weather: Array<{ icon: string, description: string }>
}