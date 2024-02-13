'use client'

import { useState } from 'react'

import { Icon } from '../Icon'

export function Countdown() {
    const [amount, setAmount] = useState<number>(1)

    function handlePlusAmount() {
        setAmount((state) => state + 1)
    }

    function handleMinusAmount() {
        setAmount((state) => state - 1)
    }

    return (
        <div
            className="flex items-center justify-between gap-3 p-2 bg-base-400 rounded-lg"
            onClick={handleMinusAmount}
        >
            <button className="">
                <Icon name="minus" />
            </button>

            <div className=""> {amount} </div>

            <button
                className="group hover:cursor-pointer"
                onClick={handlePlusAmount}
            >
                <Icon
                    className="text-primary-600 group-hover:text-primary-600"
                    name="plus"
                />
            </button>
        </div>
    )
}
