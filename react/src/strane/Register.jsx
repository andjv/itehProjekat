import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'


const Register = () => {

    const [zaposleni, setZaposleni] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone_number: ''
    })

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('email'))
            navigate('/')
    }, []);


    



    const register = () => {

        axios.post("http://localhost:8000/api/register", zaposleni).then(res => {

            if (res.data.status == 200) {
                Swal.fire({
                    icon: 'info',
                    title: 'Register message',
                    text: 'You have been successfully registered!'
                })
                navigate('/')
            }
            else
                Swal.fire({
                    icon: 'info',
                    title: 'Register message',
                    text: 'Error!'
                })

        });
    }


    return (
        <div>
            <h1 id="it-space-dev">IT-SPACE-DEV</h1>

            <div className="dreg text-center">

                <div className="dloginfield">
                    <span>First name</span>
                    <input type='text' className="form-control mt-1" placeholder="Please enter your first name"
                        value={zaposleni.first_name}
                        onChange={e => setZaposleni({ ...zaposleni, first_name: e.target.value })} />
                </div>

                <div className="dloginfield">
                    <span>Last name</span>
                    <input type='text' className="form-control mt-1" placeholder="Please enter your last name"
                        value={zaposleni.last_name}
                        onChange={e => setZaposleni({ ...zaposleni, last_name: e.target.value })} />
                </div>

                <div className="dloginfield">
                    <span>Email</span>
                    <input type='email' className="form-control mt-1" placeholder="Please enter your email"
                        value={zaposleni.email}
                        onChange={e => setZaposleni({ ...zaposleni, email: e.target.value })} />
                </div>

                <div className="dloginfield">
                    <span>Password</span>
                    <input type='password' className="form-control mt-1" placeholder="Please enter your password"
                        value={zaposleni.password}
                        onChange={e => setZaposleni({ ...zaposleni, password: e.target.value })} />
                </div>

                <div className="dloginfield">
                    <span>Phone number</span>
                    <input type='text' className="form-control mt-1" placeholder="Please enter your phone number"
                        value={zaposleni.phone_number}
                        onChange={e => setZaposleni({ ...zaposleni, phone_number: e.target.value })} />
                </div>

                <button onClick={register} className="btn btn-dark">Register</button>

            </div>


        </div>
    )
}

export default Register;