
import {AppBar, Toolbar, Typography, styled} from '@mui/material'

import { NavLink } from 'react-router-dom'

const Head = styled(AppBar)`
    background: #3289a8
`

const Tab = styled(NavLink)`
    margin-right: 20px;
    color: inherit;
    text-decoration: none;
`

const Navbar = () => {
  return (
    <Head position='static'>
        <Toolbar>
            <Tab to = "/">KUNAL</Tab>
            <Tab to = "all">all user</Tab>
            <Tab to = "add">add user</Tab>
        </Toolbar>
            
    </Head>
  )
}

export default Navbar;
