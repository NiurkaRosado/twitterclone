"use client"
import { IoClose } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"

export default function registro(){

    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registrarUsuarioEmail = async (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert(`Usuario registrado: ${user.email}`)
        })
        .catch((error) => {
            const errorCode =error.code;
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
        });
    }

    return(
        <div className="bg-black flex justify-center items-center rounded-r-2xl border-none">
            <button onClick={() => setShowModal(true)}>
            Registrarse
            </button>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-black w-full max-w-md p-8 max-h-[100vh]">
                        <button onClick={() => setShowModal(false)} ><IoClose color="white" /></button>
                        <div className="flex justify-center items-center flex-col">
                           <FaXTwitter color="white" className="flex items-center justify-center"/>
                           <h3 className="font-bold text-white text-[2rem]">Create your account</h3>
                           <br />
                           <input type="text" placeholder="name" className="w-full bg-black rounded-xl text-white border border-gray-600 p-3" />
                           <input type="number" placeholder="phone" className="w-full top-[5px] bg-black rounded-xl text-white border border-gray-600 p-3" />
                        </div>
                    </div>

                </div>
            )

            }
        </div>
    )
}
