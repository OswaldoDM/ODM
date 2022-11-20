import { useState } from "react"
import { ImCancelCircle} from "react-icons/im";
import odm from "../assets/ODM2.png";
import { MdOutlineCancel} from "react-icons/md";
import { BiMenuAltRight} from "react-icons/bi";


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

                
                <div className="md:hidden">

                    <button onClick={() => setOpen(!open)} 
                    className= {`text-myPurple p-2 `} >            
                                    
                        {open ? 

                        <MdOutlineCancel className="h-8 w-8"/>

                        :

                        <BiMenuAltRight className="h-8 w-8"/>            

                        }              

                    </button>          

                </div> 

            </div>
        </div>

        
        {open ? 

        <div className= 
        {`md:hidden flex flex-col items-center gap-3    
        text-lg font-semibold h-[50px] transition-css
        px-12 sm:px-24 font-Poppins
        `}>            

            <a className=" " href="#projects">
                    Project
            </a>
                
            <a className="" href="#contact">
                    Contact
            </a>

           
            
        </div>

        :

        <div className= "h-0 transition-css"></div>


        }

    </nav>
</div>

  )
}
