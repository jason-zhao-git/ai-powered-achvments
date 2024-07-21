"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import { Button } from "@/components/ui/button";
import { signInAction } from "@/serveractions/auth-action";
import Image from "next/image";
// typing animation
import { TypeAnimation } from "react-type-animation";
import '../css/Login.css'

const Loginapp = () => {
  return (
    <div
      className="App relative min-h-screen min-w-full overflow-hidden flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/loginbg.png')" }}
    >
      <div className="-mt-72">
        <div className="flex flex-col items-center mb-8">
          <div className="relative translate-y-44 -translate-x-20 h-12 w-12 z-1 bg-white bg-opacity-20 rounded-lg shadow-lg border-2 border-opacity-50 border-white backdrop-filter backdrop-blur-lg backdrop-saturate-100"></div>
          <div className="relative translate-y-52 -translate-x-16 h-8 w-8 z-50 bg-white bg-opacity-20 rounded-md shadow-lg border-2 border-opacity-50 border-white backdrop-filter backdrop-blur-lg backdrop-saturate-100"></div>
          <div className="relative translate-y-24 translate-x-20 h-12 w-12 z-50 bg-white bg-opacity-20 rounded-lg shadow-lg border-2 border-opacity-50 border-white backdrop-filter backdrop-blur-lg backdrop-saturate-100"></div>
          <div className="relative translate-y-32 translate-x-16 h-8 w-8 z-1 bg-white bg-opacity-20 rounded-md shadow-lg border-2 border-opacity-50 border-white backdrop-filter backdrop-blur-lg backdrop-saturate-100"></div>
          <div className="h-36 w-36 bg-white bg-opacity-20 rounded-full shadow-lg border-2 border-opacity-50 border-white backdrop-filter backdrop-blur-lg backdrop-saturate-100 flex justify-center items-center hover:scale-110 transition-transform duration-300">
            <Image
              src="/achvAIrm.png"
              alt="AchvAI Logo"
              width={130}
              height={130}
              className="rounded-full z-20"
            />
          </div>
        </div>

        <Tilt>
          <div className="container h-144 w-144 bg-white bg-opacity-10 rounded-full shadow-lg border-2 border-opacity-50 border-white backdrop-filter backdrop-blur-lg backdrop-saturate-100 flex flex-col justify-center items-center p-6">
            <div className="text-center w-5/6 h-1/3 -mt-4">
              <div className="text-gray-700 font-poppins font-semibold text-3xl tracking-widest inline-block text-center mb-8">
                <TypeAnimation
                  sequence={[
                    "Your Life,\n Your Path,\n Your Achievements!",
                    7000,
                    "Craft Your Journey,\n Achieve Your Milestones! \n Create Your Path,\n Celebrate Your Success!",
                    30000,
                    "Hello Friend!\n Ready for your new quest in life?",
                    30000,
                    "Greetings Hero!\n Will you retrieve the ancient artifact from the bandits?",
                    30000,
                    "Hi Mystic!\n Will you uncover the dark magic source?",
                    30000,
                    "Dear Detective!\n Will you embark on a rescue mission to save the noble?",
                    30000,
                  ]}
                  wrapper="span"
                  speed={40}
                  style={{ whiteSpace: "pre-line" }}
                  repeat={Infinity}
                />
              </div>
            </div>
            <form
              className="w-full flex flex-col items-center"
              action={signInAction}
            >
              <Button
                variant={"outline"}
                className="w-3/4 bg-white bg-opacity-10 shadow-lg relative z-10 border-2 border-opacity-50 border-white backdrop-filter backdrop-blur-lg backdrop-saturate-100 text-gray-900/90 rounded-lg p-2 flex items-center justify-center text-md font-semibold"
              >
                Log In With
                <img
                  src="/icons/google.svg"
                  alt="Google Icon"
                  className="w-5 h-5 ml-2"
                />
              </Button>
            </form>
            <form className="w-full flex flex-col items-center" action="/demo">
            
              <Button
                variant={"outline"}
                className="mt-2 w-3/4 bg-white bg-opacity-70 shadow-lg relative z-10 border-2 border-opacity-50 border-white backdrop-filter backdrop-blur-lg backdrop-saturate-100 text-gray-900/90 rounded-lg p-2 flex items-center justify-center text-md font-semibold"
              >
                <span className="rainbow_text_animated">Demo Link</span>
              </Button>
              
            </form>

            <div className="mt-4 text-white text-opacity-75 -mb-4">
              Powered by Gemini
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Loginapp;
