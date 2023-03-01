import './style.scss'

import store from "../../store"

import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

import { setAllPredections, setCityComparationAction, setPredectionAction, setResponseData, setCityAction } from '../../store/Predictions/actions'

import search from '../../assets/search.png'

import { IPredection, IState } from '../../global'



const Input: React.FC = () => {
    const [focus, setFocus] = useState(false)

    const key = import.meta.env.VITE_REACT_APP_KEY
    const predection = useSelector((state: IState) => state.predection)

    function generateValue(lat: number, lon: number, city: string) {
        let filterGenerete: Array<Array<IPredection>> = []

        predection.predectionsAll ? predection.predectionsAll.forEach((item) => {
            if (item[0].toUpperCase() == city.toUpperCase()) {
                filterGenerete.push(item[1])
            }
        }) : ''

        if (filterGenerete.length > 0) {
            store.dispatch(setPredectionAction(filterGenerete[0]))
        }

        else {
            const response = axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${key}`)
                .then(response => {

                    store.dispatch(setResponseData(response.data))

                    let values: Array<IPredection> = []
                    for (let i = 0; i < 40; i += 8) {
                        values.push(response.data.list[i])
                    }
                    store.dispatch(setPredectionAction(values))
                })
        }

    }

    useEffect(() => {
        let controle = []

        predection.predectionsAll.forEach((item) => {
            if (item[0].toUpperCase() == predection.city.toUpperCase()) {
                controle.push(1)
            }
        })

        if (predection.valuesPredections != null && controle.length == 0) {
            store.dispatch(setAllPredections([...predection.predectionsAll, [predection.cityComparation, predection.valuesPredections]]))
        }
    }, [predection.valuesPredections])

    function generateLocation(city: string) {
        const response = axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`)
            .then(response => {
                store.dispatch(setCityComparationAction(city))
                generateValue(response.data[0].lat, response.data[0].lon, city)
            })
            .catch(() => {
                store.dispatch(setCityComparationAction('Valor Inválido'))
                store.dispatch(setPredectionAction([]))
            })
    }

    return (
        <div className={`GroupInput ${focus ? 'borderInput' : '' || predection.city != '' ? 'borderInput' : ''}`}>
            <input
                onChange={(e) => store.dispatch(setCityAction(e.target.value))}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />
            <button type="button" onClick={() => generateLocation(predection.city)}>
                <img
                    height={'100%'}
                    src={search}
                />
            </button>
        </div>
    )
}

export default Input