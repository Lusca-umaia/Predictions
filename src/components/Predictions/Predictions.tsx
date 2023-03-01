import './style.scss'

import Modal from './Modal/Modal'

import { useSelector } from "react-redux"
import { IPredection, IState } from "../../global"

import { setWeatherForecasts } from '../../store/Predictions/actions'

import { useState } from 'react'
import store from '../../store'

const Predictions: React.FC = () => {
    const [modal, setModal] = useState<boolean>(false)


    const predection = useSelector((state: IState) => state.predection)

    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const date = new Date()

    function setValuesPredenctionsDay(dt_txt: string[]) {
        let filter = predection.reponseData.list.filter((element) => {
            let splitComparation = element.dt_txt.split(' ')
            splitComparation = splitComparation[0].split('-')
            let dayComparation = dt_txt[0].split('-')
            return splitComparation[2] == dayComparation[2]
        })
        store.dispatch(setWeatherForecasts(filter))
    }

    return (
        <section className="Predections-Container">
            <h2 className='cityTop'>
                {predection.valuesPredections ? predection.cityComparation.toUpperCase() : ''}
            </h2>
            <div className="Predections-group">
                {predection.valuesPredections &&
                    predection.valuesPredections.map((item, index: number) => (
                        <section className="Predections-box" onClick={() => { setValuesPredenctionsDay(item.dt_txt.split(' ')); setModal(true) }}>
                            <h2>{days[date.getDay() + index > 6 ? date.getDay() + index - 7 : date.getDay() + index]}</h2>
                            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={item.weather[0].description} />
                            <article>
                                <h3>{item.main.temp_max.toFixed(0)}°</h3>
                                <h3 id="min">{item.main.temp_min.toFixed(0)}°</h3>
                            </article>
                            <h3 id="description">{item.weather[0].description}</h3>
                        </section>
                    ))
                }
            </div >
            <Modal visible={() => setModal(false)} effect={modal} />
        </section >
    )
}
export default Predictions