import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from 'next/router'
import {useState} from "react";
import React from "react";

export default function Home() {
    let flag=true
    const navBar = () => {
     if (flag===true) {
         document.getElementById("show").style.top="45px";
         flag=false
     }else {
         document.getElementById("show").style.top="-400px";
         flag=true
     }
    }
  return (
      <div>
          <div className="flex sm:flex-row flex-col">
              <div className="sm:w-1/12 w-auto h-12 px-6  bg-indigo-700 justify-center flex items-center">
                  <a href="#"><FontAwesomeIcon className="w-8 sm:block hidden h-8 text-white hover:text-lime-500 transition" icon={faHome}/></a>
                  <div className="sm:hidden cursor-pointer flex flex-col p-2 box-border hover:border-lime-600 transition-all justify-between  w-9 h-9 border absolute left-10" onClick={navBar} >
                      <div className="w-full h-0.5 bg-white"></div>
                      <div className="w-full h-0.5 bg-white"></div>
                      <div className="w-full h-0.5 bg-white"></div>
                  </div>
              </div>
              <nav className="bg-indigo-700 h-auto  sm:px-6 p-0 sm:w-11/12 w-auto">
                  <ul id="show" className=" bg-indigo-700 flex sm:flex-row flex-col sm:pl-0 pl-8 sm:static absolute justify-end pr-4 w-full transition-all z-10 top-[-400px]">
                      <li className=" h-12 sm:mb-0 mb-1 sm:ml-5 ml-0"><a href="#" className="leading-10 text-white h-12 block uppercase font-bold hover:text-lime-500 transition">about us</a></li>
                      <li className="h-12  sm:ml-5 ml-0  sm:mb-0 mb-1"><a href="#" className="leading-10 h-12 block text-white uppercase font-bold hover:text-lime-500 transition ">product</a></li>
                      <li className="h-12  sm:ml-5 m-0  sm:mb-0 mb-1"><a href="#" className="leading-10 h-12 text-white uppercase font-bold hover:text-lime-500 block transition">blog</a></li>
                      <li className=" h-12  sm:ml-5 m-0  sm:mb-0 mb-1"><a href="#" className="leading-10 h-12 text-white uppercase font-bold hover:text-lime-500 block transition">contact</a></li>
                      <li className="h-12  sm:ml-5 m-0  sm:mb-0 mb-1"><a href="#" className="leading-10 h-12 text-white uppercase font-bold hover:text-lime-500 block transition">faq</a></li>
                  </ul>
              </nav>
          </div>
        <div className="w-auto h-auto py-6 box-border">
          <h1 className="text-4xl font-bold text-black w-auto text-center mb-5 capitalize">this page is home</h1>
          <h3 className="text-3xl text-black w-auto text-center mb-5 capitalize">material-ui navbar with drawer</h3>
          <p className="text-black w-3/5 m-auto text-center mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolor exercitationem obcaecati recusandae sequi. Aperiam cum id illo iusto laborum, minus modi, neque, non nostrum perspiciatis quae reprehenderit vel veniam?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque aut cum dolorem dolores dolorum excepturi expedita harum ipsa laudantium magni nostrum odit quas quasi, quo quos rerum similique ullam!
          </p>
        </div>
      </div>

  )
}
