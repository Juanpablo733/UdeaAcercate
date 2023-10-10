
import { theme } from '@/theme';
import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import NextLink from 'next/link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Navbar = () => {
  return (
      <AppBar>
        <Toolbar className='debug' style={{backgroundColor: theme.palette.primary.main}}>

          <NextLink href='/' passHref legacyBehavior>
            <Link className='debug' style={{textDecoration: 'none'}}>
              <Typography variant='h6' color='white'>UdeAcercate</Typography>
            </Link>
          </NextLink>

          <Box flex={1}/>

          <Box sx={{display: { xs: 'none', sm: 'block'}}}>
            <NextLink href='/category/deportivo' passHref legacyBehavior>
                <Link style={{textDecoration: 'none'}}>
                    <Button style={{color: 'white'}}>Deportivo</Button>
                </Link>
            </NextLink>
            <NextLink href='/category/cultural' passHref legacyBehavior>
                <Link style={{textDecoration: 'none'}}>
                    <Button style={{color: 'white'}}>Cultural</Button>
                </Link>
            </NextLink>
            <NextLink href='/category/academico' passHref legacyBehavior>
                <Link style={{textDecoration: 'none'}}>
                    <Button style={{color: 'white'}}>Académico</Button>
                </Link>
            </NextLink>
          </Box>

          <Box flex={1}/>

          <Typography variant='h6' color='white'>Juan Pablo Bedoya Sánchez</Typography>
          <IconButton>
            <AccountCircleIcon fontSize='large'/> 
          </IconButton>

            
        </Toolbar>
      </AppBar>
  )
}

export default Navbar