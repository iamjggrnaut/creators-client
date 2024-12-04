import React from 'react'
import CIconBlack from '../../assets/CIconBlack'
import LiWhite from '../../assets/LiWhite'
import DetailButton from '../../assets/DetailButton'
import smimg from '../../assets/smimage.png'
import lgimg from '../../assets/lgimage.png'

const MainAdvantages = () => {

    return (
        <div className='container adv-container'>
            <div className="main-advantages">
                <div className="adv-header">
                    <span>запишем тебя так — как нужно именно тебе</span>
                    <CIconBlack />
                </div>
                <p className="fw-bold mt-4">
                    Creators. — уютное место, где ценится комфорт гостей. Мы предусмотрели все, что необходимо для крутого и качественного результата:
                </p>
                <div className="adv-list container col-11">
                    <div className="adv-item">
                        <LiWhite />
                        <span>цены фиксированны — вы всегда заранее знаете сколько будет стоить съемка</span>
                    </div>
                    <div className="adv-item">
                        <LiWhite />
                        <span>у нас есть 3 тарифа: <span className="nulshock-orange">ALFA</span>, <span className="nulshock-orange">CENTURIO</span> и <span className="nulshock-orange">EXELSIOR</span></span>
                    </div>
                    <div className="adv-item">
                        <LiWhite />
                        <span>в базовый <span className="nulshock-orange">ALFA</span> мы добавили обработку звука и монтаж </span>
                    </div>
                    <div className="adv-item">
                        <LiWhite />
                        <span>а на тарифе <span className="nulshock-orange">EXELSIOR</span> у вас будет менеджер для курирования съемки, чтобы все прошло точно по вашей задумке</span>
                    </div>
                    <div className="adv-item">
                        <LiWhite />
                        <span>также мы можем предоставить вам ведущего</span>
                    </div>
                    <div className="adv-item">
                        <LiWhite />
                        <span>написать для вас джингл и многое другое</span>
                    </div>
                    <div className="detailbtn-block">
                        <DetailButton />
                    </div>
                </div>

                <div className="adv-bottom">
                    <div className="adv-col-1">
                        <img src={smimg} alt="" />
                        <div className='mt-5 col1-btns'>
                            <div className="row-line">
                                <span className="row-btn nulshock-orange">INST</span>
                                <span className="row-btn">наша команда</span>
                            </div>
                            <div className="row-line">
                                <span className="row-btn">наши клиенты</span>
                                <span className="row-btn nulshock-orange">TG</span>
                            </div>
                        </div>
                    </div>
                    <div className="adv-col-2">
                        <img src={lgimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainAdvantages