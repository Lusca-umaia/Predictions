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
        weatherForecasts: IPredection[]
    }
}

export interface IPredection {
    dt_txt: string
    dt: number
    main: { temp_max: number, temp_min: number, temp: number }
    weather: Array<{ icon: string, description: string }>
}

export interface IResponse {
    list: Array<IPredection>
}