import React from 'react'
import TopButton from '../../assets/TopButton'
import TopImage from '../../assets/TopImage'
import LiBlack from '../../assets/LiBlack'
import { Link } from 'react-router-dom'

const MainTop = () => {

    return (
        <div className='container'>
            <div className="main-top">
                <div className='top-text'>
                    <h1 className="title">creators.</h1>
                    <h1 className="title">moscow</h1>
                    <p className="subtitle">студия создания видео-контента</p>
                </div>
                <Link to={'/book'}>
                    <TopButton />
                </Link>
            </div>
            <div className="toplist">
                <TopImage />
                <div className="toplist-items">
                    <div className="list-item">
                        <LiBlack />
                        <span>фиксированные цены </span>
                    </div>
                    <div className="list-item">
                        <LiBlack />
                        <span>продакшн под ключ</span>
                    </div>
                    <div className="list-item">
                        <LiBlack />
                        <span>кураторы на съемки</span>
                    </div>
                    <div className="list-item">
                        <LiBlack />
                        <span>ведущие</span>
                    </div>
                    <div className="list-item">
                        <LiBlack />
                        <span>и многое другое</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainTop