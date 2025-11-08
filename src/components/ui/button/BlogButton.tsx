'use client'
import { RiArrowUpSLine } from "react-icons/ri"

export const BlogButton = () => {
    return (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-fit block md:hidden">
            <RiArrowUpSLine className="text-5xl text-white bg-black"/>
        </button>
    )
}
