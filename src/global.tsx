export interface IActions {
    type: string,
    payload: any
}

export interface IState {
    predection: {
        city: string
        valuesPredections: Array<IPredection>
        cityComparation: string
        predectionsAll: [string, IPredection[]][],
        reponseData: IResponse,
        weatherForecasts: any
    }
}

export interface IPredection {
    dt_txt: string
    main: { temp_max: number, temp_min: number }
    weather: Array<{ icon: string, description: string }>
}

export interface IResponse {
    list: Array<IPredection>
}