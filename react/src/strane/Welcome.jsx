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
        <div>

            <h1 id="wtt">Welcome to the IT-SPACE-DEV system!</h1>

            <button onClick={logout} className="btn btn-dark" id="lgt">LOG OUT</button>

        </div>
    )
}

export default Welcome;