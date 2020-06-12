import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Content, Profile } from './styles'

import Notifications from '~/components/Notifications'
import logo from '~/assets/logo-header.svg'

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Logo" />
          <Link to="/dashboar">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Emerson Oliveira</strong>
              <Link to="/profile">Meuperfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Avatar"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  )
}
