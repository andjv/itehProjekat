import { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from '../komponente/Nav';

const Prisustva = () => {

    const [prisustva, setPrisustva] = useState([])

    useEffect(() => {

        axios.get("http://localhost:8000/api/prisustva").then(res => {
            setPrisustva(res.data.prisustva)
        });

    }, []);


    var body = '';
    body = prisustva.map((p) => {
        return (
            <tr key={p.id}>
                <td>{p.first_name}</td>
                <td>{p.last_name}</td>
                <td>{p.email}</td>
                <td>{p.phone_number}</td>
                <td>{p.prijava}</td>
            </tr>
        )
    })




    return (
        <div>

            <Nav />

            <div className='prisustva-t'>

                <h1 id='p-n'>Prisustva</h1>

                <table className="table table-primary text-center">

                    <thead>
                        <tr>
                            <th>Ime</th>
                            <th>Prezime</th>
                            <th>Email</th>
                            <th>Broj telefona</th>
                            <th>Vreme prijave</th>
                        </tr>
                    </thead>

                    <tbody>
                        {body}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Prisustva;