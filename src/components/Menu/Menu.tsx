import React, { FC, useState, MouseEvent, useEffect } from 'react'
import './Menu.styles.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { useWindowSize } from '../../hooks/useWindowSize'

const menuItems = [
  { id: 'research', name: 'Research' },
  { id: 'company', name: 'Company' },
  { id: 'grants', name: 'Grants' },
  { id: 'join-our-team', name: 'JoinOurTeam', mobileName: 'Team' }
]

export const Menu: FC = () => {
  let location = useLocation()
  const navigate = useNavigate()
  const { width } = useWindowSize()
  const [active, setActive] = useState(() => {
    if (location.pathname === '/company') {
      return 'company'
    }
    if (location.pathname === '/grants') {
      return 'grants'
    }
    if (location.pathname === '/join-our-team') {
      return 'join-our-team'
    }
    if (location.state) {
      return location.state
    }
    return 'research'
  })

  useEffect(() => {
    if (location.state) {
      const elementToScroll = document.querySelector(`#${location.state}`)
      elementToScroll?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      navigate('', { replace: true })
    }
    if (location.pathname === '/') {
      setActive('research')
    }
    if (location.pathname === '/company') {
      setActive('company')
      window.scrollTo(0, 0)
    }
  }, [location.state, navigate])

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, menuId: string) => {
    e.preventDefault()
    if (menuId === 'company') {
      navigate('/company')
      setActive(menuId)
    } else if (menuId === 'grants') {
      navigate('/grants')
      setActive(menuId)
    } else if (menuId === 'join-our-team') {
      navigate('/join-our-team')
      setActive(menuId)
    } else {
      navigate('/', { state: menuId })
      const elementToScroll = document.querySelector(`#${menuId}`)
      setActive(menuId)
      elementToScroll?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className='menu__wrapper'>
      <ul className='menu'>
        {menuItems.map(menuItem => (
          <li
            key={menuItem.id}
            className={
              active === menuItem.id
                ? 'menu__item menu__item_active'
                : 'menu__item'
            }
          >
            <a
              onClick={e => handleClick(e, menuItem.id)}
              href={`#${menuItem.id}`}
            >
              {menuItem.mobileName && width < 768
                ? menuItem.mobileName
                : menuItem.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
