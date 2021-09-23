import React, { ReactElement } from 'react'
import { IShow } from '../../shared/interfaces/IShow'
import ShowCell from './ShowCell/ShowCell'

interface Props {
    shows : IShow[];
}

function ShowTableView({shows}: Props): ReactElement {
    return (
        <div>
            {
                shows.map(show => <ShowCell show={show} key={show.id}/>)
            }
        </div>
    )
}

export default ShowTableView
