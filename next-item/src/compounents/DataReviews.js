import { useState } from "react"
import "../styles/Reviwes.css";
import {RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri";
    
    const DataReviews = ({items}) => {

        const [countIndex, setCountIndex] = useState(0)

        const {id, image, job, name, text} = items[countIndex]

        const incriment = () => {

            if(countIndex === items.length - 1 ) {

                    setCountIndex((countIndex) => countIndex = 0)

            }else {
                    setCountIndex(countIndex + 1)
            }
        }

        const decriment = () => {

            if(countIndex === 0 ) {

                setCountIndex((countIndex) => countIndex = items.length - 1)

            }else {

                    setCountIndex(countIndex - 1)
            }
            
            
        }

        const randamIndex = () => {

            let rndn = Math.floor(Math.random() * items.length)

            if(rndn === countIndex && rndn < items.length - 1) {

                setCountIndex(rndn++)
            }

            setCountIndex(rndn)
            
        }

    return (

        <>

                <article className="article-container">

                    <img src= {image} alt={name} />

                    <div>
                        <h2 className="name"> {name} </h2>
                        <h3> {job} </h3>
                        <p> {text} </p>
                    </div>

                    <div className="btns">
                    <button onClick={decriment}  className="btn"> <RiArrowLeftSLine/> </button>
                    <button onClick={randamIndex} className="Rendam"> Rendam </button>
                    <button onClick={incriment} className="btn"><RiArrowRightSLine/></button>
                    </div>

                </article>

        </>
    )
    }

    export default DataReviews