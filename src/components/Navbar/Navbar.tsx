import './style.scss'

import logo from '../../assets/logo.png'

const Navbar: React.FC = () => {
    return (
        <nav>
            <img
                src={logo}
            />
            <span>Previsões-Online</span>
        </nav>
    )
}

export default Navbar