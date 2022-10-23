import React, {FC, useState, MouseEvent, useEffect} from 'react'
import './Menu.styles.scss'
import {Logo} from "../Logo/Logo";
import {useLocation, useNavigate} from 'react-router-dom';

const menuItems = [
    {id: 'research', name: 'Research'},
    {id: 'company', name: 'Company'},
    {id: 'grants', name: 'Grants'},
    {id: 'joinOurTeam', name: 'Join Our Team'},
]

export const Menu: FC = () => {
    let location = useLocation();
    const navigate = useNavigate();
    const [active, setActive] = useState(() => {
        if (location.pathname === '/company') {
            return 'company'
        }
        if (location.pathname === '/grants') {
            return 'grants'
        }
        if (location.state) {
            return location.state
        }
        return 'research'
    })

    useEffect(() => {
        if (location.state) {
            const elementToScroll = document.querySelector(`#${location.state}`)
            elementToScroll?.scrollIntoView({behavior: 'smooth', block: "start"})
            navigate('', { replace: true })
        }
    }, [])

    const handleClick = (e: MouseEvent<HTMLAnchorElement>, menuId: string) => {
        e.preventDefault();
        if (menuId === 'company') {
            navigate('/company')
            setActive(menuId)
        }
        else if (menuId === 'grants') {
            navigate('/grants')
            setActive(menuId)
        } else {
            navigate('/', { state: menuId })
            const elementToScroll = document.querySelector(`#${menuId}`)
            setActive(menuId)
            elementToScroll?.scrollIntoView({behavior: 'smooth', block: "start"})
        }
    }
console.log(menuItems.map(menuItem => menuItem))
    return <div className="menu__wrapper">
        <div className="menu__logo">
            <Logo/>
        </div>
        <p className="menu__content">Technology for IT engineers' labour automatisation</p>
        <ul className='menu'>
            {menuItems.map(menuItem => <li
                key={menuItem.id}
                className={active === menuItem.id ? 'menu__item menu__item_active' : 'menu__item'}><a
                onClick={(e) => handleClick(e, menuItem.id)}
                href={`#${menuItem.id}`}>{menuItem.name}</a></li>)}
        </ul>
    </div>
}