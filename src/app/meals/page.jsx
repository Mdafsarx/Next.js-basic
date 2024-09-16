"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Meals() {

    const [search, setSearch] = useState('')
    const [Data, setData] = useState([]);
    const [Error, setError] = useState('')
    const handle = async (e) => {
        e.preventDefault();
        const search = e.target.search.value;
        setSearch(search)
    }

    const getData = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
            const data = await res.json();
            setData(data.meals);
            setError("")
        } catch (error) {
            setError('no data found')
        }
    }


    useEffect(() => {
        getData()
    }, [search])

    return (
        <div className="px-20">
            <h1 className="text-3xl font-bold text-center text-red-700">Here you will search your fav meals</h1>

            {/* search */}
            <form className="mt-6" onSubmit={handle}>
                <input name="search" type="search" className="border-2 p-2" />
                <button type="submit" className="bg-blue-700 text-white p-2 border-0 rounded-r-2xl">Search</button>
            </form>
            <div className="grid grid-cols-2 gap-20 ">
                {
                    !Error && Data?.map((v, i) => <div key={i}>
                        <p>text</p>
                        <Image src={v?.strMealThumb} alt="name" width={500} height={500} className="rounded-2xl" />
                    </div>)
                }
            </div>

            {
                Error && <h4>data not found .........</h4>
            }

        </div>
    )
}
