import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from '../layouts/Default'
import { ErrorLayout } from '../layouts/Error'

import { Home } from '../pages/site/home'
import { Checkout } from '../pages/site/checkout'
import { CheckoutCompleted } from '../pages/site/checkout/completed'
import { Error404 } from '../pages/error/404'

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="checkout/completed" element={<CheckoutCompleted />} />
            </Route>

            <Route path="*" element={<ErrorLayout />}>
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>
    )
}
