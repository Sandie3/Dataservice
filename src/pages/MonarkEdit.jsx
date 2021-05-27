import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { getMonarkFromId, editMonark } from '../helpers/monarkapi'

const MonarkEdit = (props) => {

    let id = props.match.params.id;

    const [monark, setMonark] = useState()
    const [error, setError] = useState()
    const [loader, setLoader] = useState(false)

    const history = useHistory();

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        const formData = new FormData(e.target);

        editMonark(id, formData).then(data => {
            console.log(data)
            setLoader(false);
            history.goBack();
        }).catch(err => {
            console.log(err)
            setError('There was an error!')
            setLoader(false);
        })

    }

    return (
        <>
            <h1>Edit monark with ID: {id}</h1>
            {
                monark &&
                <div>
                    <form onSubmit={handleSubmit}>

                        <label htmlFor="navn">Name:</label><br />
                        <input name="navn" type="text" defaultValue={monark.navn} />
                        <br /><br />
                        <label htmlFor="navn">Country:</label><br />
                        <input name="land" type="text" defaultValue={monark.land} />
                        <br /><br />
                        <label htmlFor="navn">History:</label><br />
                        <input name="historie" type="text" defaultValue={monark.historie} />
                        <br /><br />
                        <label htmlFor="navn">Birth year:</label><br />
                        <input name="foedtaar" type="text" defaultValue={monark.foedtaar} />
                        <br /><br />
                        <label htmlFor="navn">Death year:</label><br />
                        <input name="doedaar" type="text" defaultValue={monark.doedaar} />
                        <br /><br />
                        <input type="submit" value="Edit" />
                    </form>
                </div>
            }
            {
                loader &&
                <h2>Loading...</h2>
            }
            {
                error &&
                <h2>{error}</h2>
            }
        </>
    )
}

export default MonarkEdit

