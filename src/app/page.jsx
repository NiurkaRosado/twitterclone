"use client"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { auth } from "@/firebase/config";
import { TfiLayoutLineSolid } from "react-icons/tfi";

export default function Home() {


  const registrarGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);

        alert('success')
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert(errorCode)
        // ...
      });
  }

  return (
    <main>
      <div className="bg-black flex items-center justify-center min-h-screen top-[200px]">
        <div className="w-[50%] flex justify-center">
          <FaXTwitter color="white" size={300} />
        </div>
        <div className="w-[]flex items-center justify-start flex-col">
          <h1 className="text-[4rem] font-bold  font-style">Happening now</h1>
          <br />
          <h3 className="text-[2rem] font-bold">Join today.</h3>
          <br />
          <div className="space-y-2">
          <button onClick={() => registrarGoogle()} className="flex items-center justify-center bg-white text-black rounded-[50px] px-[69px] py-[6px]"><FcGoogle size={25} /> Sing up with Google</button>
          <button className="flex items-center justify-center bg-white text-black rounded-[50px] px-[75px] py-[6px]"> <FaApple size={25} /> Sing up with Apple</button>
          <p className="text-white">-------------------------- or --------------------------</p>
          <button className="flex items-center justify-center bg-blue-400 text-white font-bold rounded-[50px] px-[95px] py-[6px]">Create account</button>
          <p className="text-gray-600 text-[11px] top-[]">By signing up, you agree to the <a className="text-blue-500" href="">Terms of Service</a> and <a className="text-blue-400" href="
          ">Privacy <br />
           Policy</a>, including <a className="text-blue-400" href="">Cookie Use</a>.</p>
          </div>
          <br />
          <br />
          <div className="space-y-3">
          <p className="font-bold text-white text-[16px]">Already have an account?</p>
          <button className="flex items-center justify-center border border-white font-bold text-blue-400 rounded-[50px] px-[125px] py-[6px]">Sign in</button>
          </div>
        </div>
      </div>

    </main>
  );
}
