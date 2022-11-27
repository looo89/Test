import React, {useState} from 'react'
import "./styles.css"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"
import { IPhoto } from '../../types/data'

interface PropsType {
    id?: number;
    photos: IPhoto[];
}

const Slider: React.FC<PropsType> =({photos}) =>{
    
    const length = photos.length

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        setSlideIndex(slideIndex === 0 ? length-1 : slideIndex+1)
    }

    const prevSlide = () => {
        setSlideIndex(slideIndex === 0 ? length-1 : slideIndex-1)
    }

    if(!Array.isArray(photos) || photos.length <= 0){
        return null
    }

    return (
        <div className='container'>
            <FaArrowAltCircleLeft className='arrow' onClick={prevSlide}/>
            <div className='slider'>
            {photos.map((photo, index)=>{
                  return(
                    <div className={ index===slideIndex ? 'slide active' : 'slide'} key={photo.id}>
                        {index === slideIndex && (
                             <img src={photo.thumbnailUrl}
                             alt=''
                             className='imgPhoto'
                         />
                        )}
                    </div>
                  )
            })}
            
            </div>
            <FaArrowAltCircleRight className='arrow' onClick={nextSlide}/>
            
        </div>
    )
}
export default Slider