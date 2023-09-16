import { Link, Outlet } from 'react-router-dom'

import { ErrorSvg } from '../../components/ErrorSvg'

export const ErrorLayout = () => {
    return (
        <div className="w-screen h-screen bg-white">
            <div className="w-full h-full p-6 flex items-center justify-center">
                <div className="max-w-4xl h-auto flex flex-col items-center justify-center">
                    <Outlet />

                    <ErrorSvg />

                    <Link
                        className="w-fit h-12 py-0 px-10 border-none rounded-md uppercase bg-orange-400 shadow-white0 font-bold text-base text-white flex items-center justify-center gap-4 disabled:opacity-60 disabled:cursor-not-allowed hover:cursor-pointer hover:bg-orange-600"
                        to="/"
                    >
                        {/* <Icon name="ArrowBigLeft" customClass="text-white" /> */}
                        Página inicial
                    </Link>
                </div>
            </div>
        </div>
    )
}
