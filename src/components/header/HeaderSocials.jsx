import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/ryan-idowu-4a493b166/' target="_blank">
                <BsLinkedin />
            </a>
            <a href='https://github.com/ryanido' target="_blank">
                <BsGithub/>
            </a>
        </div>
    )
}

export default HeaderSocials