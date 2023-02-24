import './style.scss'

import { useSelector } from "react-redux"

import { IState } from "../../global"
import { IPredection } from "../../global"

const Predictions: React.FC = () => {
    const predection = useSelector((state: IState) => state.predection)

    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const date = new Date()
    return (
        <section className="Predections-Container">
            <h2
                style={{ color: '#FFF', marginBottom: '20px', textAlign: 'center', fontSize: '2.2em' }}
            >
                {predection.valuesPredections ? predection.cityComparation.toUpperCase() : ''}
            </h2>
            <div className="Predections-group">
                {predection.valuesPredections &&
                    predection.valuesPredections.map((item, index: number) => (
                        <section className="Predections-box">
                            <h2>{days[date.getDay() + index > 6 ? date.getDay() + index - 7 : date.getDay() + index]}</h2>
                            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={item.weather[0].description} />
                            <article>
                                <h3>{item.main.temp_max.toFixed(0)}°</h3>
                                <h3 id="min">{item.main.temp_min.toFixed(0)}°</h3>
                            </article>
                            <h3 id="description">{item.weather[0].description}</h3>
                        </section>
                    ))
                }
            </div>
        </section>
    )
}
export default Predictions