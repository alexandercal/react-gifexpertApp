import React, {useState} from 'react';
import { AddCategory } from './Components/AddCategory';
import GifGrid from './Components/GifGrid';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';


export const GifExpertApp = ()=>{
    const [categories, setCategories] = useState(['One Punch']);
    // const handleAdd = (e)=>{
    //     setCategories([...categories, 'xHunter']);
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr/>
            
            <ol>
                {
                    categories.map((category)=>
                        <GifGrid 
                        key={category}
                        category={category}
                        />
                    )
                }
            </ol>
        </>
    )
}