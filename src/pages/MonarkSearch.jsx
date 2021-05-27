import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { searchMonark } from '../helpers/monarkapi'

const MonarkSearch = () => {

    const [monarks, setMonarks] = useState()
    const [search, setSearch] = useState('kong')
    const [error, setError] = useState()

    useEffect(() => {
        searchMonarks();
    }, [])

    const searchMonarks = () => {
        searchMonark(search).then(data => {
            setMonarks(data)
            setError();
        }).catch(err => {
            setError("There was an error!");
            setMonarks()
        })
    }

    return (
        <div className="search">
            <h1>Search monarks:</h1>
            <input type="text" placeholder="Search..." defaultValue={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={searchMonarks} >Search</button>
            {
                monarks &&
                <>
                    {monarks.map(m => {
                        return (
                            <div className="searchChild" key={m._id}>
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
                !monarks && !error &&
                <h1>Loading...</h1>
            }
            {
                error &&
                <h1>ERROR: {error}</h1>
            }
        </div>
    )
}

export default MonarkSearch
