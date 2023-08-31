import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [zaposleni, setZaposleni] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        phone_number: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("email")) navigate("/");
    }, []);

    const register = () => {
        axios
            .post("http://localhost:8000/api/register", zaposleni)
            .then((res) => {
                if (res.data.status == 200) {
                    Swal.fire({
                        icon: "info",
                        title: "Poruka",
                        text: "Uspešno ste se registrovali!",
                    });
                    navigate("/");
                } else
                    Swal.fire({
                        icon: "info",
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
                        Registracija
                    </h1>

                    <div className="space-y-4">
                        <div>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                                placeholder="Unesite prvo ime..."
                                value={zaposleni.first_name}
                                onChange={(e) =>
                                    setZaposleni({
                                        ...zaposleni,
                                        first_name: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                                placeholder="Unesite prezime..."
                                value={zaposleni.last_name}
                                onChange={(e) =>
                                    setZaposleni({
                                        ...zaposleni,
                                        last_name: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                                placeholder="Unesite email adresu..."
                                value={zaposleni.email}
                                onChange={(e) =>
                                    setZaposleni({
                                        ...zaposleni,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                                placeholder="Unesite šifru..."
                                value={zaposleni.password}
                                onChange={(e) =>
                                    setZaposleni({
                                        ...zaposleni,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                                placeholder="Unesite broj telefona..."
                                value={zaposleni.phone_number}
                                onChange={(e) =>
                                    setZaposleni({
                                        ...zaposleni,
                                        phone_number: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <button
                            onClick={register}
                            className="primary w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-offset-2"
                        >
                            Registruj se!
                        </button>

                        <div className="text-center text-gray-500">
                            Imaš već kreiran nalog?{" "}
                            <Link to="/" className="underline text-black">
                                Prijavi se odmah!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <div>
        //

        //     <div className="dreg text-center">
        //         <div>
        //             <span>First name</span>
        //             <input
        //                 type="text"
        //                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
        //                 placeholder="Please enter your first name"
        //                 value={zaposleni.first_name}
        //                 onChange={(e) =>
        //                     setZaposleni({
        //                         ...zaposleni,
        //                         first_name: e.target.value,
        //                     })
        //                 }
        //             />
        //         </div>

        //         <div>
        //             <span>Last name</span>
        //             <input
        //                 type="text"
        //                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
        //                 placeholder="Please enter your last name"
        //                 value={zaposleni.last_name}
        //                 onChange={(e) =>
        //                     setZaposleni({
        //                         ...zaposleni,
        //                         last_name: e.target.value,
        //                     })
        //                 }
        //             />
        //         </div>

        //         <div>
        //             <span>Email</span>
        //             <input
        //                 type="email"
        //                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
        //                 placeholder="Please enter your email"
        //                 value={zaposleni.email}
        //                 onChange={(e) =>
        //                     setZaposleni({
        //                         ...zaposleni,
        //                         email: e.target.value,
        //                     })
        //                 }
        //             />
        //         </div>

        //         <div>
        //             <span>Password</span>
        //             <input
        //                 type="password"
        //                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
        //                 placeholder="Please enter your password"
        //                 value={zaposleni.password}
        //                 onChange={(e) =>
        //                     setZaposleni({
        //                         ...zaposleni,
        //                         password: e.target.value,
        //                     })
        //                 }
        //             />
        //         </div>

        //         <div>
        //             <span>Phone number</span>
        //             <input
        //                 type="text"
        //                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
        //                 placeholder="Please enter your phone number"
        //                 value={zaposleni.phone_number}
        //                 onChange={(e) =>
        //                     setZaposleni({
        //                         ...zaposleni,
        //                         phone_number: e.target.value,
        //                     })
        //                 }
        //             />
        //         </div>

        //         <button onClick={register} className="btn btn-dark">
        //             Register
        //         </button>
        //     </div>
        // </div>
    );
};

export default Register;
