import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getMonark } from '../helpers/monarkapi'

const Monarker = () => {

    const [monark, setMonark] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        getMonark().then(data => {
            setMonark(data)
            setError()
        }).catch(err => {
            console.log(err)
            setError(err)
            setMonark()
        })
    }, [])

    return (
        <div className="monarkerList" >
            {
                monark &&
                <>
                    {monark.map(m => {
                        return (
                            <div className="monarkL" key={m._id}>
                                <Link to={'/monark/' + m._id}>
                                    <img className="pictures" src={"http://localhost:5056/images/" + m.billede} alt={m.navn} />
                                </Link>
                                <div className="info">
                                    <p>{m.navn}</p>
                                </div>
                            </div>
                        )
                    })}
                </>
            }
            {
                !monark && !error &&
                <h1>Loading..</h1>
            }
            {
                error &&
                <h1></h1>
            }
        </div>
    )
}

export default Monarker
