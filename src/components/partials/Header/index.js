import React from 'react';
import { Link } from 'react-router-dom';
import  HeaderArea  from './styled';
import {isLogged} from '../../../helpers/AuthHandler'

const Header = () => {
    let logged = isLogged()
    return (
        <HeaderArea>
            <div className='container'>
                <div className='logo'>
                  <Link to="/">
                    <span className='logo-1'>O</span>
                    <span className='logo-2'>L</span>
                    <span className='logo-3'>X</span>
                  </Link>
                </div>
                <nav>
                    <ul>

                    {/*Para logado*/}
                         {logged && 
                             <>
                                 <li>
                                     <Link to="/my-account">Minha Conta</Link>
                                 </li>
                                 <li>
                                     <Link to="/logout">Sair</Link>
                                 </li>
                                 <li>
                                     <Link to="/post-an-ad" className="button">Poste um anúncio</Link>
                                 </li>
                             </>
                        }

                    {/*Para NÃO logado*/}
                         {!logged && 
                             <>
                                 <li>
                                     <Link to="/signin">Login</Link>
                                 </li>
                                 <li>
                                     <Link to="/signup">Cadastrar</Link>
                                 </li>
                                 <li>
                                     <Link to="/signin" className="button">Poste um anúncio</Link>
                                 </li>
                             </>
                        }
                        
                        
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}

export default Header;