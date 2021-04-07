import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    //const categories = ['Cute Dogs', 'Funny Animals', 'Wolves'];

    const [categories, setCategories] = useState(['Cute Dogs'])

  /*   const handleAdd = () => {
        //funcion que agrega un elemento al arreglo
    //    setcategories([ 'Lions', ...categories]);
    setCategories( categ => [...categ, 'Sky']);
    } */

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr />

            <ol>
                {
                    categories.map( category => 
                        <GifGrid
                        key = { category }
                        category = { category }/>)
                }
            </ol>
        </>
    )
}
