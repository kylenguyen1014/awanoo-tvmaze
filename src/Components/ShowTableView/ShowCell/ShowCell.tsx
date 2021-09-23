import React, { ReactElement } from 'react'
import { IShow } from '../../../shared/interfaces/IShow'

interface Props {
    show: IShow
}

function ShowCell({show}: Props): ReactElement {
    return (
        <div>
            {
                show.name
            }
        </div>
    )
}

export default ShowCell
