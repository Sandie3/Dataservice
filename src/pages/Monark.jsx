import { useEffect, useState } from 'react'

import { getMonarkFromId } from '../helpers/monarkapi'

const Monark = (props) => {

    let id = props.match.params.id;

    const [monark, setMonark] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        getMonarkFromId(id).then(data => {
            console.log(data)
            setMonark(data)
            setError()
        }).catch(err => {
            console.log(err)
            setError("There was an error")
            setMonark();
        })
    }, [])

    return (
        <>
            {
                monark &&
                <div className="monark">
                    <aside>
                        <img src={"http://localhost:5056/images/" + monark.billede} />
                        <div className="monarkInfo">
                            <h2>{monark.navn}</h2>
                            <h3>From: {monark.land}</h3>
                            <h3>Period: {monark.foedtaar + ' - ' + monark.doedaar}</h3>
                            <h3>Age: {monark.doedaar - monark.foedtaar}</h3>
                            <div className="history">
                                <h3>History:</h3>
                                <h3>{monark.historie}</h3>
                            </div>
                        </div>
                    </aside>
                </div>
            }
            {
                error &&
                <h1>{error}</h1>
            }
        </>
    )
}

export default Monark
