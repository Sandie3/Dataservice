import { useState } from 'react'

import { postMonark } from '../helpers/monarkapi'

const MonarkCreate = () => {

    const [message, setMessage] = useState()
    const [error, setError] = useState()
    const [loader, setLoader] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        const formData = new FormData(e.target);

        postMonark(formData).then(data => {
            console.log(data)
            setMessage(data);
            setError()
            setLoader(false)
        }).catch(err => {
            console.log(err)
            setError('There was an error!')
            setMessage();
            setLoader(false);
        })

    }

    return (
        <div>
            <h1>Create Monark</h1>
            {
                message &&
                <div>
                    <h2>Monark was created</h2>
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
            <form onSubmit={handleSubmit}>
                <input name="navn" type="text" placeholder="Name" />
                <br /><br />
                <input name="land" type="text" placeholder="Country" />
                <br /><br />
                <input name="historie" type="text" placeholder="History" />
                <br /><br />
                <input name="foedtaar" type="text" placeholder="Born" />
                <br /><br />
                <input name="doedaar" type="text" placeholder="Died" />
                <br /><br />
                {/* <input name="billede" type="text" value="null" disabled />
                <br /><br /> */}
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}

export default MonarkCreate
