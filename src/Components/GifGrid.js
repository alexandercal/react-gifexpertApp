import React /*, {useState, useEffect}*/ from 'react'
import {useFetchGifs} from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/GetGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const {data:images, loading} = useFetchGifs(category);

    // console.log(loading);

    //UseEfect se usua para no renderizar todo el componente. En este caso si se aidcionara un button se dispara siempre el fectch
    //entonces se usa el use efect para evitar eso
    /// se va a hacer un customhooks
    // useEffect(() => {
    //     getGifs(category).then(
    //         setImages
    //     )
    // }, [category])


    return (
        <>
            <h3>{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid animate__animated animate__fadeIn">
                <ol>
                    {
                    images.map(
                        img=>
                            <GifGridItem key={img.id} {...img}/>
                    )
                    }
                </ol>
            </div>
        </>
    )
}

export default GifGrid
