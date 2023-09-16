import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
    return (
        <div className="w-full h-full">
            <main className="pt-28">
                <Outlet />
            </main>
        </div>
    )
}
