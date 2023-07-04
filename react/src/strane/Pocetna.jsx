import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom'


const Pocetna = () => {

    if (localStorage.getItem('email'))
        navigate('/welcome')

    const [zaposleni, setZaposleni] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate()



    const login = () => {

        axios.post("http://localhost:8000/api/login", zaposleni).then(res => {

            if (res.data.status == 200) {
                Swal.fire({
                    icon: 'info',
                    title: 'Login message',
                    text: 'You have been successfully logged in!'
                });


                axios.get(`http://localhost:8000/api/check-login/${res.data.id}`).then(res => {
                    if (res.data.brojKasnjenjaZaposleni % 3 == 0) {
                        const options = {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json',
                                'X-RapidAPI-Key': '4916172c11msh0beee19c8846ca4p127267jsn0bc7bcd7fc43',
                                'X-RapidAPI-Host': 'hourmailer.p.rapidapi.com'
                            },
                            body: '{"toAddress":"' + zaposleni.email + '","title":"Opomena","message":"Postovani/a,<br/><br/>Obavestavamo vas da ste u prethodnom periodu zakasnili sa prijavom na IT sistem ' + res.data.brojKasnjenjaZaposleni + ' puta. Molimo vas da se u narednom periodu prijavljujete svakog dana od 8:00-8:30h kako ne biste dosli u sitaciju da budete kaznjeni.<br/><br/> Srdacan pozdrav.<br/>IT-SPACE-DEV Team"}'
                        };

                        fetch('https://hourmailer.p.rapidapi.com/send', options)

                    }

                });



                localStorage.setItem('email', zaposleni.email)
                if (localStorage.getItem('email') == 'admin@it.com')
                    navigate('/admin-dashboard')
                else
                    navigate('/welcome')

            }
            else
                Swal.fire({
                    icon: 'error',
                    title: 'Register message',
                    text: 'Error!'
                })
        });
    }



    return (
        <div>

            <h1 id="it-space-dev">IT-SPACE-DEV</h1>

            <div className="dlogin text-center">
                <div className="dloginfield">
                    <span>Email</span>
                    <input type='email' className="form-control mt-2" placeholder="Please enter your email"
                        value={zaposleni.email}
                        onChange={e => setZaposleni({ ...zaposleni, email: e.target.value })}
                    />
                </div>

                <div className="dloginfield">
                    <span>Password</span>
                    <input type='password' className="form-control mt-1" placeholder="Please enter your password"
                        value={zaposleni.password}
                        onChange={e => setZaposleni({ ...zaposleni, password: e.target.value })}
                    />
                </div>

                <button onClick={login} className="btn btn-dark">Log in</button>

                <br />

                <p className="text-muted mt-2">If you don't have an account, please <b><i><u><Link to="/register" id='reg'>register</Link></u></i></b>.</p>

            </div>








        </div >
    )
}

export default Pocetna;