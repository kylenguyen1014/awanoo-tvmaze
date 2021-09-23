import axios from 'axios'
import React, { ReactElement, useEffect, useState } from 'react'
import ShowTableView from '../Components/ShowTableView/ShowTableView'
import { IShow } from '../shared/interfaces/IShow'


function Shows(): ReactElement {
    const [shows, setShows] = useState<IShow[]>([])

    const fetchShows = async () => {
        const resp = await axios.get<IShow[]>('https://api.tvmaze.com/shows')
        setShows(resp.data.slice(0, 20))
    }
    
    useEffect(() => {
        fetchShows()
    }, [])
    return (
        <div>
            <ShowTableView shows={shows}/>
        </div>
    )
}

export default Shows
