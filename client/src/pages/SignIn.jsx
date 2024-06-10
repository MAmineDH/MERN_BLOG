import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";
export default function SignIn() {
  return (
    <div className="min-h-screen mt-20">
      <div className=" gap-5 flex p-4 max-w-3xl mx-auto  flex-col md:flex-row md:items-center">
        {/* left */}
        <div className="flex-1">
          <Link to={"/"} className=" text-4xl  dark:text-white font-bold">
            <span className=" text-4xl px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Saraha
            </span>
            Blog
          </Link>
          <p className=" text-sm mt-3">
            this is a demo project for a blogging app you need SignIn first{" "}
          </p>
        </div>
        {/* rigth */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your user name " />
              <TextInput type="text"
              placeholder="Name"
              id="username"
              />
            </div>
            <div>
              <Label value="Your user Email " />
              <TextInput type="text"
              placeholder="Email"
              id="userEmail"
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput type="password"
              placeholder="Password"
              id="pwd"
              />
            </div>
            <Button gradientDuoTone={'purpleToPink'} 
              type="submit"
            >
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account ?</span>
            <Link to={'/signup'} className="text-blue-500"> Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
