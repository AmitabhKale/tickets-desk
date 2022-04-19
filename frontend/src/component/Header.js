import {Link, useNavigate } from 'react-router-dom';
import {FaSignInAlt, FaSignOutAlt ,FaUser} from 'react-icons/fa';
import {useSelector, useDispatch } from 'react-redux';
import {logout , reset} from '../features/auth/authSlice'

function Header() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className="header">
        <div className="logo">
            <Link to='/' >Ticket Desk</Link>
        </div>
        <ul>
          { user ? (
            <button className="btn" onClick={onLogout}><FaSignOutAlt /> Logout</button>
          ) : ( <> <li>
            <Link to='/login'>
              <FaSignInAlt /> Login
            </Link>
          </li>
          <li>
            <Link to='/register'>
              <FaUser /> Register
            </Link>
          </li>
          </>)
          }
         
        </ul>
    </header>
  )
}

export default Header