import { BrowserRouter } from 'react-router-dom'

import './styles/global.css'

import { Routers } from './routers'

export const App = () => {
    return (
        <BrowserRouter>
            <Routers />
        </BrowserRouter>
    )
}
