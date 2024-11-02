import Link from "next/link";
export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-400">

      <div className="bg-gray-100 text-blue-500 h-[500px] w-[500px] flex flex-col justify-center items-center gap-6 text-xl font-sans shadow-gray-100 shadow-sm rounded-3xl">

        <h1 className="text-6xl font-bold leading-snug"> Log-in </h1>

        <input type="email" className="outline text-lg w-72 pl-2 text-black placeholder-shown:text-blue-800  hover:text-blue-600" placeholder="Email" />

        <input type="password" placeholder="Password" className="outline text-lg w-72 pl-2 placeholder-shown:text-blue-800 hover:text-blue-600" />

        <p >Forget Password</p>

        <button className=" bg-sky-500 hover:bg-sky-700 w-72 text-center p-2 rounded-lg text-white">Login</button>

        <p>Don't have an account?</p>

        <Link href="/Signup" className=" bg-sky-500 hover:bg-sky-700 w-72 text-center p-2 rounded-lg text-white"> Sign In</Link>

      </div>
    </div>

  );
}
