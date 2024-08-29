'use client'

import { Suspense } from 'react'

import SuccessPage from './success-page'

function SearchBarFallback() {
    return <>placeholder</>
}

export default function Success() {
    return (
        <Suspense fallback={<SearchBarFallback />}>
            <SuccessPage />
        </Suspense>
    )
}
