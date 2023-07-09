import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'


const Nav = () => {

    const navigate = useNavigate()

    const logout = () => {

        localStorage.removeItem('email')

        Swal.fire({
            icon: 'info',
            title: 'Login message',
            text: 'You have been successfully logged out!'
        })

        navigate('/')

    }


    return (
        <div>
            <nav className="d-flex align-items-center justify-content-center m-5">
                <Link to="/prisustva" className='nav-m-link'>Prisustva</Link>
                <Link to="/kasnjenja" className='nav-m-link'>Kašnjenja</Link>
                <Link to="/zaposleni" className='nav-m-link'>Zaposleni</Link>
                
                
                <div className="d-flex align-items-center justify-content-center m-5">
                    <button onClick={logout} className="btn btn-dark" id="admin-logout-button">LOG OUT</button>
                </div>
            
            </nav>
        </div>
    )
}

export default Nav;