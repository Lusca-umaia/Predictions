import './style.scss'

import CloseIMG from '../../../assets/cross.png'

import { useSelector } from "react-redux"
import { IState } from "../../../global"

import { useEffect, useState } from 'react'

interface IProps {
    visible: () => void,
    effect: boolean
}
const Modal: React.FC<IProps> = ({ visible, effect }) => {

    const predection = useSelector((state: IState) => state.predection)

    function setHor(value: string) {
        let valueHor: string | string[] = value.split(' ')
        valueHor = valueHor[1].split(':')
        return valueHor[0] + 'h'
    }

    return (
        <>
            <div
                style={{ opacity: `${effect ? '1' : '0'}`, zIndex: `${effect ? '' : '-1'}` }}
                className='effectModal'
                onClick={visible} />
            <div className={`container_modal ${effect ? 'heightEffect' : ''}`}
                style={
                    {
                        borderTop: `${effect ? '8px solid #FFF' : ''}`,
                        padding: `${effect ? '30px 20px' : ''}`,
                    }
                }
            >
                <img
                    id='closeButton'
                    src={CloseIMG}
                    onClick={visible}
                />
                {predection.weatherForecasts.length > 0 ? (
                    <>
                        <div className='header_modal'>
                            <div className='groupDivider'>
                                <h2>{predection.weatherForecasts[0].main.temp.toFixed(0)}°</h2>
                                <hr />
                                <article>
                                    <p>{predection.weatherForecasts[0].main.temp_max.toFixed(0)}°</p>
                                    <p style={{ color: 'rgb(36, 124, 149)' }}>{predection.weatherForecasts[0].main.temp_min.toFixed(0)}°</p>
                                </article>
                            </div>
                        </div>
                        <hr className='line' />
                        <div className='group_modal'>
                            {predection.weatherForecasts.map((item, index: number) => (
                                < section key={item.dt}>
                                    <div className='box_modal'>
                                        <h2>{setHor(item.dt_txt)}</h2>
                                        <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={item.weather[0].description} />
                                        <p>{item.main.temp_max.toFixed(0)}°</p>
                                        <p style={{ color: 'rgb(36, 124, 149)' }}>{item.main.temp_min.toFixed(0)}°</p>
                                    </div>
                                </section>
                            ))}
                        </div>
                    </>
                ) : null}

            </div>
        </>
    )
}

export default Modal