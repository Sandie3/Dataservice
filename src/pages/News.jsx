import { useState, useEffect } from 'react'

import { getNews } from '../helpers/newsapi'

const News = () => {

    const [newsData, setNewsData] = useState()
    const [search, setSearch] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        searchNews();
    }, [])

    const searchNews = () => {
        getNews(search).then(data => {
            console.log(data);
            setNewsData(data);
            setError();
        }).catch(err => {
            setError(err);
        })

    }

    return (
        <>
            <h1>News</h1>
            <select name="" id="" onChange={(e) => setSearch(e.target.value)}>
                <option value="ae">United Arab Emirates</option>
                <option value="ar">Argentina</option>
                <option value="at">Austria</option>
                <option value="au">Australia</option>
                <option value="be">Belgium</option>
                <option value="bg">Bulgaria</option>
                <option value="br">Brazil</option>
                <option value="ca">Canada</option>
                <option value="ch">Switzerland</option>
                <option value="cn">China</option>
                <option value="co">Colombia</option>
                <option value="cu">Cuba</option>
                <option value="cz">Czechia</option>
                <option value="de">Germany</option>
                <option value="eg">Egypt</option>
                <option value="fr">France</option>
                <option value="gb">United Kingdom of Great Britain</option>
                <option value="gr">Greece</option>
                <option value="hk">Hong Kong</option>
                <option value="hu">Hungary</option>
                <option value="id">Indonesia</option>
                <option value="ie">Ireland</option>
                <option value="il">Israel</option>
                <option value="in">India</option>
                <option value="it">Italy</option>
                <option value="jp">Japan</option>
                <option value="kr">Korea</option>
                <option value="lt">Lithuania</option>
                <option value="lv">Latvia</option>
                <option value="ma">Morocco</option>
                <option value="mx">Mexico</option>
                <option value="my">Malaysia</option>
                <option value="ng">Nigeria</option>
                <option value="nl">Netherlands</option>
                <option value="no">Norway</option>
                <option value="nz">New Zealand</option>
                <option value="ph">Philippines</option>
                <option value="pl">Poland</option>
                <option value="pt">Portugal</option>
                <option value="ro">Romania</option>
                <option value="rs">Serbia</option>
                <option value="ru">Russian Federation</option>
                <option value="sa">Saudi Arabia</option>
                <option value="se">Sweden</option>
                <option value="sg">Singapore</option>
                <option value="si">Slovenia</option>
                <option value="sk">Slovakia</option>
                <option value="th">Thailand</option>
                <option value="tr">Turkey</option>
                <option value="tw">Taiwan</option>
                <option value="ua">Ukraine</option>
                <option value="us">United States of America</option>
                <option value="ve">Venezuela</option>
                <option value="za">South Africa</option>
            </select>
            {/* <input type="text" placeholder="Search..." onChange={ ( e ) => setSearch( e.target.value ) } /> */}
            <button onClick={searchNews} >Search</button>
            {
                newsData &&
                <div>
                    <h1>There's {newsData.totalResults} news</h1>
                    {
                        newsData.articles.map((n, i) => {
                            let imgUrl = n.urlToImage;

                            if (imgUrl === null) {
                                imgUrl = "https://img3.stockfresh.com/files/l/limbi007/m/55/413525_stock-photo-404-error.jpg";
                            }

                            return (
                                <div key={i} style={{ backgroundColor: "silver", margin: 20 + "px", padding: 20 + "px" }}>
                                    <h2>{n.title}</h2>
                                    <div>{n.description}</div>
                                    <div>
                                        <a href={n.url} target="_blank" rel="noreferrer"><img src={imgUrl} style={{ maxWidth: 50 + '%' }} alt={i} /></a>
                                    </div>
                                    <p><a href={n.url} target="_blank" rel="noreferrer">Read more...</a></p>
                                </div>
                            )
                        })
                    }
                </div>
            }
            {
                !newsData && !error &&
                <div>
                    <h1>Loading..</h1>
                </div>
            }
            {
                error &&
                <h1>ERROR: {error}</h1>
            }
        </>
    )
}

export default News
