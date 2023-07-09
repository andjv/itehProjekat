import { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from '../komponente/Nav';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Zaposleni = () => {

    const [zaposleni, setZaposleni] = useState([])
    const [srcInput, setSrcInput] = useState('')
    const [sortiranje, setSortiranje] = useState('ASC')

    const navigate = useNavigate()


    useEffect(() => {

        axios.get("http://localhost:8000/api/zaposleni").then(res => {
            setZaposleni(res.data.zaposleni)
        });

    }, []);


    const handleSrcInput = (e) => {
        setSrcInput(e.target.value)
    }



    const search = () => {
        axios.get(`http://localhost:8000/api/zaposleni-search/${srcInput}`).then(res => {
            setZaposleni(res.data.zaposleni)
        });
    }


    const sort = () => {
        axios.get(`http://localhost:8000/api/zaposleni-sort/${sortiranje}`).then(res => {
            setZaposleni(res.data.zaposleni)
            setSortiranje(res.data.sortiranje)
        });
    }


    const deleteZaposleni = (idZaposleni) => {
        axios.delete(`http://localhost:8000/api/zaposleni-delete/${idZaposleni}`).then(res => {
            if (res.data.status == 200) {
                Swal.fire({
                    icon: 'info',
                    title: 'Delete message',
                    text: 'User has been successfully deleted!'
                })
            }

        });
    }




    var body = '';
    body = zaposleni.map((z) => {
        return (
            <tr key={z.id}>
                <td>{z.first_name}</td>
                <td>{z.last_name}</td>
                <td>{z.email}</td>
                <td>{z.phone_number}</td>
                <td>{z.kasnjenja}</td>
                <td><button onClick={() => deleteZaposleni(z.id)} className='btn btn-light'>DELETE</button></td>
            </tr>
        )
    })





    return (
        <div>
            <Nav />

            <div className='prisustva-t'>

                <h1 id='p-n'>Zaposleni</h1>

                <input type="text" onChange={e => { handleSrcInput(e); search() }} className='form-control' id='src' placeholder='Unesite ime | prezime | email | broj telefona' />
                <button onClick={sort} className='btn btn-secondary' id='sort-button'>SORT</button>


                <table className="table table-primary text-center">

                    <thead>
                        <tr>
                            <th>Ime</th>
                            <th>Prezime</th>
                            <th>Email</th>
                            <th>Broj telefona</th>
                            <th>Broj kašnjenja</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {body}
                    </tbody>

                </table>
            </div>



        </div >
    )
}

export default Zaposleni;