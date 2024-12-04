import React from 'react'
import FooterImg from '../assets/FooterImg'

const Footer = () => {

    return (
        <div className='foot'>
            <div className="footer-top">
                <p>москва, ул. краснобогатырская 2с4</p>
                <p>проход и проезд на территорию по пропускам</p>
            </div>

            <div className="footer-content container">
                <div className='col-4'>
                    <FooterImg />
                </div>
                <div className='col footer-contact'>
                    <div className="footer-contact-line">
                        <span className='line-bold'>телефон</span>
                        <span> +7 993 611 3390</span>
                    </div>
                    <div className="footer-contact-line">
                        <span className='line-bold'>telegram </span>
                        <span>@creatorsmoscow</span>
                    </div>
                    <div className="footer-contact-line">
                        <span className='line-bold'>почта для связи </span>
                        <span>info@creators.mocsow</span>
                    </div>
                    <div className="footer-contact-line">
                        <span className='line-bold'>по вопросам сотрудничества</span>
                        <span>ad@creators.moscow</span>
                    </div>
                </div>
            </div>


            <div className="footer-bottom">
                <p>работа у нас</p>
                {/* <p>инстаграм*</p>
                <p>телеграм-канал</p>
                <p>youtube</p> */}
                <p>правовая информация</p>
            </div>
            {/* <div className="text-center">
                <span style={{ fontSize: '12px' }}>* cоциальная сеть инстаграм признана в рф экстремистской организацией</span>
            </div> */}
        </div>
    )
}

export default Footer