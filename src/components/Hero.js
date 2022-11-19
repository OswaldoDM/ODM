import pic from "../assets/pic.png"
import { FaReact} from "react-icons/fa";
import { SiTailwindcss} from "react-icons/si";
import { AiOutlineHtml5} from "react-icons/ai";
import { TbBrandCss3} from "react-icons/tb";
import { TbBrandJavascript} from "react-icons/tb";

export function Hero() {    

    return(

    <>

    <div  className="container mx-auto bg-gray-100 flex justify-between items-center px-6  md:px-4 lg:px-20 xl:mt-20 2xl:px-40  ">
                
        <div 
            className = "hidden sm:flex sm:w-[20%] sm:text-xl md:w-[22%]  md:text-2xl flex-col justify-center items-center ">

           <a href="https://api.whatsapp.com/send/?phone=4244181500&text&type=phone_number&app_absent=0" target= "_blank"> 
                <i className= "uil uil-whatsapp mb-2 cursor-pointer text-gray-600 hover:text-gray-900 transition duration-300"></i> 
           </a> 

           <a href="https://github.com/OswaldoDM" target= "_blank"> 
                <i className="uil uil-github-alt mb-2 cursor-pointer text-gray-600 hover:text-gray-900 transition duration-300"></i> 
            </a>

           <a href="https://www.linkedin.com/in/oswaldo-diaz-milanes-951319146/" target= "_blank"> 
                <i className= "uil uil-linkedin cursor-pointer text-gray-600 hover:text-gray-900 transition duration-300"></i>
            </a>
            
        </div>

        <div className = "flex flex-1 flex-col py-14 sm:py-10 xl:py-14">
            <h1 className = "font-semibold text-[65px] leading-none text-myBlack text-center">Oswaldo Diaz<br />Milanes</h1>
            
            <h2 className = " mt-5 mb-4 font-medium font-Poppins text-base text-gray-600 text-center">Front-End Developer</h2>

            <p className = "font-Poppins text-gray-600 text-sm text-center mb-2 2xl:mb-4 ">
                I'm a front-end developer based in Valencia, Venezuela.
            </p>


            <div className = "flex justify-between mx-7 sm:mx-0 sm:justify-evenly xl:justify-between mt-2 ">

                <p className = "text-orange-400 sm:text-3xl  xl:text-2xl flex items-center ">{<AiOutlineHtml5 />}
                <span className = "text-slate-500 font-mono text-sm sm:hidden xl:flex  xl:text-sm font-semibold ml-1">HTML</span></p>

                <p className = "text-blue-500 sm:text-3xl  xl:text-2xl flex items-center ">{<TbBrandCss3 />}
                <span className = "text-slate-500 font-mono text-sm sm:hidden xl:flex  xl:text-sm font-semibold ml-1">CSS</span></p>

                <p className = "text-cyan-500 sm:text-3xl  xl:text-2xl flex items-center ">{<SiTailwindcss />}
                <span className = "text-slate-500 font-mono text-sm sm:hidden xl:flex  xl:text-sm font-semibold ml-1">Tailwind</span></p>

                <p className = "text-myYellow sm:text-3xl  xl:text-2xl flex items-center amarillo">{<TbBrandJavascript />}
                <span className = "text-slate-500 font-mono text-sm sm:hidden xl:flex  xl:text-sm font-semibold ml-1">Javascript</span></p>

                <p className = "text-sky-400 sm:text-3xl  xl:text-2xl flex items-center ">{<FaReact />}
                <span className = "text-slate-500 font-mono text-sm sm:hidden xl:flex  xl:text-sm font-semibold ml-1">React</span></p>
                

            </div>       
            
        </div>
            
            
        <div className = "hidden sm:flex sm:relative sm:bottom-10 lg:bottom-6 xl:bottom-3  flex-1 items-center justify-center ">
            <img src = {pic} className = 
            "rounded-full sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] xl:w-[230px] xl:h-[230px] "></img>
        </div>        

        
    </div>


    <div 
    className = "hidden bg-gray-100 sm:flex items-center sm:ml-[210px] md:ml-[250px] lg:ml-[300px]  xl:ml-[380px] xl:mt-3 2xl:hidden ">

        <i className = "uil uil-mouse-alt text-4xl text-myBlack"></i> 
        <h2 className ="text-myBlack font-Poppins cursor-pointer">Scroll Down</h2>
        <a href="#projects"> <i className ="uil uil-arrow-down ml-1 cursor-pointer"></i> </a>

        
    </div>

    </>
    )
}


                                
                                