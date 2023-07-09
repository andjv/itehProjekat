import { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from '../komponente/Nav';

const Kasnjenja = () => {

    const [kasnjenja, setKasnjenja] = useState([])

    useEffect(() => {

        axios.get("http://localhost:8000/api/kasnjenja").then(res => {
            setKasnjenja(res.data.kasnjenja)
        });

    }, []);

    console.log(kasnjenja)


    var body = '';
    body = kasnjenja.map((k) => {
        return (
            <tr key={k.prijava}>
                <td>{k.first_name}</td>
                <td>{k.last_name}</td>
                <td>{k.email}</td>
                <td>{k.phone_number}</td>
                <td>{k.prijava}</td>
            </tr>
        )
    })



    return (
        <div>
            <Nav />

            <div className='prisustva-t'>

                <h1 id='p-n'>Kašnjenja</h1>

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

export default Kasnjenja;