import { useState } from "react"
import { ImCancelCircle} from "react-icons/im";
import odm from "../assets/ODM2.png";

export function Header() {

    const [open, setOpen] = useState(false)

  return (

<div >
    <nav className="bg-gray-100 shadow mb-14 ">

        <div className="max-w-7xl mx-auto px-8 ">
            

            <div className= 
            {`flex items-center 
            justify-between h-16
            `}>

                <div>
                    <img src= {odm} className= "w-28 md:w-24 h-8"></img>
                </div>
                

                <div className= 
                {`w-full flex items-center 
                justify-between
                `}>

                    <a className="flex-shrink-0" href="/">
                        
                    </a>                    

                    <div className="hidden md:block">
                        
                        <div className= 
                        {`ml-10 flex 
                        items-baseline space-x-4
                        `}>

                            <a href="#projects" className=                            
                             
                            {`
                            
                            text-myOtherBlack text-base 
                            px-3 py-2 
                            rounded-md  
                            font-normal font-Poppins
                            hover:text-black 
                            transition duration-300
                            
                            `} >
                                
                                Projects
                            </a>
                            
                            <a href="#contact"  className=                            
                             
                            {`

                            text-myOtherBlack text-base 
                            px-3 py-2 
                            rounded-md  
                            font-normal font-Poppins
                            hover:text-black 
                            transition duration-300
                            
                            `} > 
                            
                                Contact
                            </a>
                            
                        </div>
                    </div>

                </div>


                <div className="block">
                    <div className="ml-4 flex items-center md:ml-6">
                    </div>
                </div>

                
                <div className="-mr-2 flex md:hidden relative">

                    <button className= 
                    {`text-myBlack inline-flex items-center 
                    justify-center p-2 rounded-md 
                    focus:outline-none
                    `} 
                    onClick={() => setOpen(!open)}>
                        
                        {open ? 

                        <ImCancelCircle className="h-8 w-8"/>

                        :

                        <svg 
                        width="20" height="20" fill="currentColor" 
                        className="h-8 w-8" 
                        viewBox="0 0 1792 1792" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path 
                            d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 
                            19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 
                            45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                            </path>                            
                        </svg>

                        }

                    </button>

                </div>

            </div>
        </div>

        {/* mobile menu */}
        
        {open && 
        <div className="md:hidden flex justify-center">

            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

                <a href="#projects" 
                className=  
                {`text-myBlack block px-3 py-2 
                rounded-md text-base font-medium 
                font-Poppins
                `} >
                    Projects
                </a>
                
                <a href="#contact" 
                className=  
                {`text-myBlack block px-3 py-2 
                rounded-md text-base font-medium 
                font-Poppins
                `} >
                    Contact
                </a>
            </div>
            
        </div>
        }

    </nav>
</div>

  )
}
