import React from 'react'
import {NavLink} from ''
const SignedInLinks = () =>
{
  return(
    <ul className='right'>
    <li><NavLink to='/'>New Project</NavLink></li>
    <li><NavLink to='/'>Log Out</NavLink></li>
    <li><NavLink to='/' className='btn btn-floating blue'>MK</NavLink></li>
    </ul>
  );
}
export default SignedInLinks;