import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'


const Welcome = () => {

    const navigate = useNavigate();

    if (localStorage.getItem('email') === null)
        window.location.replace('/')


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

        <div className="d-flex align-items-center justify-content-center m-5">
            <h1>Welcome to the IT-SPACE-DEV system!</h1>
            <button id="admin-logout-button" onClick={logout} class="btn btn-dark">LOG OUT</button>
        </div>

        
    )
}

export default Welcome;