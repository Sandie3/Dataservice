import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { delMonark, getMonark } from '../helpers/monarkapi'

import { RiDeleteBinLine, RiEditLine } from 'react-icons/ri'

const MonarkAdmin = () => {

    const [monark, setMonark] = useState()
    const [error, setError] = useState()
    const [message, setMessage] = useState()

    useEffect(() => {
        getMonark().then(data => {
            setMonark(data)
            setError()
        }).catch(err => {
            console.log(err)
            setError(err)
            setMonark()
        })
    }, [message])

    const handleDelete = (monarkerId) => {
        if (window.confirm("Are you sure you want to delete")) {

            delMonark(monarkerId).then(data => {
                console.log(data)
                setMessage(data)
                setError()
            }).catch(err => {
                console.log(err)
                setError('There was an error!')
                setMessage()
            })
        }
    }

    return (
        <div>
            <h1>Delete or edit a monark</h1>
            {
                monark &&
                <>
                    <div>
                        {monark.map(m => {
                            return (
                                <div key={m._id} style={{ backgroundColor: "lightgray", margin: "10px", padding: "10px" }}>
                                    <p style={{ fontWeight: "bold" }}>
                                        {m.navn}
                                        <RiDeleteBinLine onClick={() => handleDelete(m._id)} style={{ float: 'right', cursor: "pointer", margin: "5px" }} />
                                        <Link to={"/edit/" + m._id} style={{ color: "black", textDecoration: "none" }}>
                                            <RiEditLine style={{ float: 'right', cursor: "pointer", margin: "5px" }} />
                                        </Link>
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </>
            }
            {
                !monark && !error &&
                <h1>Loading....</h1>
            }
            {
                error &&
                <h1>ERROR: {error}</h1>
            }
        </div>
    )
}

export default MonarkAdmin
