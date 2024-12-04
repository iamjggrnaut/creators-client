import React from 'react'
import Genesis from '../../assets/Genesis'
import Nova from '../../assets/Nova'
import Echo from '../../assets/Echo'
import Chrono from '../../assets/Chrono'
import Pantheon from '../../assets/Pantheon'

const MainHalls = () => {

    return (
        <div className='main-halls container'>
            <div className="halls-row">
                <span className="genesis">
                    <Genesis />
                </span>
                <span className="nova">
                    <Nova />
                </span>
            </div>
            <div className="halls-row">
                <span className="echo">
                    <Echo />
                </span>
                <span className="chrono">
                    <Chrono />
                </span>
                <span className="pantheon">
                    <Pantheon />
                </span>
            </div>

        </div>
    )
}

export default MainHalls