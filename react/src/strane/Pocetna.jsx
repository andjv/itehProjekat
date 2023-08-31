import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import Sat from "../komponente/Sat";

const Pocetna = () => {
    const navigate = useNavigate();
    if (localStorage.getItem("email")) navigate("/welcome");

    const [zaposleni, setZaposleni] = useState({
        email: "",
        password: "",
    });

    const login = () => {
        axios.post("http://localhost:8000/api/login", zaposleni).then((res) => {
            if (res.data.status == 200) {
                Swal.fire({
                    icon: "info",
                    title: "Poruka o uspešnom prijavljivanju",
                    text: "Dobrodošli! Uspešno ste prijavljeni!",
                });

                axios
                    .get(`http://localhost:8000/api/check-login/${res.data.id}`)
                    .then((res) => {
                        if (res.data.brojKasnjenjaZaposleni % 3 == 0) {
                            const options = {
                                method: "POST",
                                headers: {
                                    "content-type": "application/json",
                                    "X-RapidAPI-Key":
                                        "4916172c11msh0beee19c8846ca4p127267jsn0bc7bcd7fc43",
                                    "X-RapidAPI-Host":
                                        "hourmailer.p.rapidapi.com",
                                },
                                body:
                                    '{"toAddress":"' +
                                    zaposleni.email +
                                    '","title":"Opomena","message":"Postovani/a,<br/><br/>Obavestavamo vas da ste u prethodnom periodu zakasnili sa prijavom na IT sistem ' +
                                    res.data.brojKasnjenjaZaposleni +
                                    ' puta. Molimo vas da se u narednom periodu prijavljujete svakog dana od 8:00-8:30h kako ne biste dosli u sitaciju da budete kaznjeni.<br/><br/> Srdacan pozdrav.<br/>IT-SPACE-DEV Team"}',
                            };

                            fetch(
                                "https://hourmailer.p.rapidapi.com/send",
                                options
                            );
                        }
                    });

                localStorage.setItem("email", zaposleni.email);
                if (localStorage.getItem("email") == "admin@it.com")
                    navigate("/admin-dashboard");
                else navigate("/welcome");
            } else
                Swal.fire({
                    icon: "error",
                    title: "Poruka",
                    text: "Greška!",
                });
        });
    };

    return (
        <div className="pocetna h-screen w-screen">
            <div className="relative flex justify-center">
                <div className="bg-white p-6 rounded-lg shadow-md w-80 mt-10">
                    <h1 className="text-3xl font-semibold mb-4 text-center">
                        Prijava na sistem IT-DEV
                    </h1>
                    <h6 className="font-thin mb-4 text-center">
                        Poenta aplikacije jeste da se zaposleni u periodu od
                        8:00-8:30 prijave na sistem, kako ne bi bili prijavljeni
                        sa kašnjenjem. Na ovaj način se jednostavnije prati
                        produktivnost unutar naše kompanije.
                    </h6>
                    <div className="space-y-4">
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                            placeholder="Unesi svoj mejl"
                            value={zaposleni.email}
                            onChange={(e) =>
                                setZaposleni({
                                    ...zaposleni,
                                    email: e.target.value,
                                })
                            }
                        />
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Unesi svoju šifru..."
                            value={zaposleni.password}
                            onChange={(e) =>
                                setZaposleni({
                                    ...zaposleni,
                                    password: e.target.value,
                                })
                            }
                        />

                        <button
                            onClick={login}
                            className="primary w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-offset-2"
                        >
                            Prijavi se
                        </button>

                        <div className="text-center text-gray-500">
                            Nemate nalog još?{" "}
                            <Link
                                to="/register"
                                className="underline text-black"
                            >
                                Registruj se sada!
                            </Link>
                        </div>
                        <Sat />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pocetna;
