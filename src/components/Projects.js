import { FaReact} from "react-icons/fa";
import { SiChakraui} from "react-icons/si";
import { SiTailwindcss} from "react-icons/si";
import landingPic from "../assets/SmartWatch.png"
import spacexPic from "../assets/SpaceX.png";
import mightyGifsPic from "../assets/MightyGifs.png";
import cryptoTodayPic from "../assets/CryptoToday.png";
import influencer from "../assets/Influencer.png";


export function Projects() {

    return(

        <>

        
<div id="projects" className= 
{`py-16 bg-gray-100 overflow-hidden 
mt-1 sm:mt-16 md:mt-24
`}>

    <div className= 
    {`container m-auto max-w-7xl text-gray-500 
    px-8 sm:px-20 lg:px-36 xl:px-40
    `}>

        <div>

            <span className = 
            {`text-myBlack text-lg 
            font-medium font-Poppins
            `}>Projects
            </span>

            <h2 className= 
            {`mt-4 xl:mb-20 text-2xl text-myBlack 
            font-bold md:text-4xl font-Poppins
            `}>My Recent Projects
            </h2>

        </div>

        <div className= 
        {`mt-16 grid text-center -mx-8 
        gap-4 grid-cols-2 lg:grid-cols-4
        `}>


            <div className="relative group cursor-pointer ">
                

                <a 
                href="https://oswaldodm.github.io/react-landing/" 
                target= "_blank" 
                className= 
                {`relative p-8 space-y-4 flex flex-col 
                justify-center items-center 
                sm:border-[1px] sm:border-gray-300 
                sm:rounded-lg
                sm:hover:border-myBlack 
                sm:transition sm:duration-300`}>
                    
                    <img src= {landingPic} className="w-32 box-s" alt="image"/>
                       
                    
                    <h6 className= 
                    {`text-myBlack text-lg 
                    font-medium font-Poppins
                    `}>Smart Watch
                    </h6>

                    <ul className = "text-gray-600 ">

                        <li className = "mb-1">Landing Page</li>                        
                        <li className = "mb-1">Light/Dark mode</li>                        

                    </ul>

                    <div className = "flex">
                        
                        <p className = 
                        {`flex items-center 
                        sm:text-xl text-sky-400
                        `}>
                            <FaReact />

                            <span className = 
                            {`text-slate-500 font-mono 
                            text-xs font-semibold ml-1 mr-3
                            `}>React</span>
                        </p>

                        <p className = 
                        {`flex items-center 
                        sm:text-lg text-teal-500
                        `}>
                            <SiTailwindcss />
                            <span className = 
                            {`text-slate-500 font-mono 
                            text-xs font-semibold ml-1
                            `}>Tailwind</span>
                        
                        </p>

                    </div>

                </a>
                


            </div>

            <div className="relative group cursor-pointer ">
                

                <a 
                href="https://oswaldodm.github.io/Influencer/" 
                target= "_blank" 
                className= 
                {`relative p-8 space-y-4 flex flex-col 
                justify-center items-center 
                sm:border-[1px] sm:border-gray-300 
                sm:rounded-lg
                sm:hover:border-myBlack 
                sm:transition sm:duration-300`}>
                    
                    <img src= {influencer} className="w-32 box-s" alt="image"/>
                       
                    
                    <h6 className= 
                    {`text-myBlack text-lg 
                    font-medium font-Poppins
                    `}>Influencer
                    </h6>

                    <ul className = "text-gray-600 ">

                        <li className = "mb-1">Landing Page</li>                        
                        <li className = "mb-1">Figma to code</li>                        

                    </ul>

                    <div className = "flex">
                        
                        <p className = 
                        {`flex items-center 
                        sm:text-xl text-sky-400
                        `}>
                            <FaReact />

                            <span className = 
                            {`text-slate-500 font-mono 
                            text-xs font-semibold ml-1 mr-3
                            `}>React</span>
                        </p>

                        <p className = 
                        {`flex items-center 
                        sm:text-lg text-teal-500
                        `}>
                            <SiTailwindcss />
                            <span className = 
                            {`text-slate-500 font-mono 
                            text-xs font-semibold ml-1
                            `}>Tailwind</span>
                        
                        </p>

                    </div>

                </a>
                


            </div>

            <div className="relative group cursor-pointer">

                <a 
                href="https://oswaldodm.github.io/react-mightyGifs/" 
                target= "_blank" 
                className= 
                {`relative p-8 space-y-4 
                flex flex-col justify-center items-center 
                sm:border-[1px] sm:border-gray-300 sm:rounded-lg
                sm:hover:border-myBlack sm:transition 
                sm:duration-300`}>

                    <img src= {mightyGifsPic} className="w-32 box-s" alt="image"/>
                    
                    <h6 className= 
                    {`text-myBlack text-lg 
                    font-medium font-Poppins
                    `}>Mighty Gifs
                    </h6>

                    <ul className = "text-gray-600 ">

                        <li className = "mb-1">Single Page App</li>                        
                        <li className = "mb-1">Giphy API</li>                        
                                                

                    </ul>

                    <div className = "flex">
                        
                        <p className = 
                        {`flex items-center 
                        text-sky-400 sm:text-xl 
                        `}>
                            <FaReact />
                            <span className = 
                            {`text-slate-500 font-mono 
                            text-xs font-semibold ml-1 mr-3
                            `}>
                                React
                            </span>
                        </p>

                        <p className = 
                        {`flex items-center 
                        text-teal-500 sm:text-lg
                        `}>
                            <SiTailwindcss />
                            <span className = 
                            {`text-slate-500 font-mono 
                            text-xs font-semibold ml-1`}>                                
                                Tailwind
                            </span>
                        </p>

                    </div>
                </a>


            </div>

            <div className="relative group cursor-pointer">


                <a 
                href="https://oswaldodm.github.io/react-SpaceX/" 
                target= "_blank" 
                className= {`relative p-8 space-y-4 flex 
                flex-col justify-center items-center 
                sm:border-[1px] sm:border-gray-300 
                sm:rounded-lg
                sm:hover:border-myBlack 
                sm:transition sm:duration-300`}>

                    <img src= {spacexPic} className="w-32 box-s" alt="image"/>
                    
                    <h6 className= 
                    {`text-myBlack text-lg 
                    font-medium font-Poppins
                    `}>Space X
                    </h6>

                    <ul className = "text-gray-600 ">

                        <li className = "mb-1">Single Page App</li>
                        <li className = "mb-1">Space X API</li>
                                                

                    </ul>

                    <div className = "flex">
                        
                        <p className = 
                        {`flex items-center 
                        text-sky-400 sm:text-xl
                        `}>
                            <FaReact />

                            <span className = 
                            {`text-slate-500 font-mono 
                            text-xs font-semibold ml-1 mr-3
                            `}>React
                            </span>
                        </p>

                        <p className = 
                        {`flex items-center 
                        text-teal-500 sm:text-lg
                        `}>
                            <SiChakraui />

                            <span className = 
                            {`text-slate-500 font-mono 
                            text-xs font-semibold ml-1
                            `}>ChakraUi
                            </span>
                        </p>

                    </div>
                </a>


            </div>

            <div className="relative group cursor-pointer">

                <a 
                href="https://oswaldodm.github.io/react-cryptoToday/" 
                target= "_blank" 
                className= {`relative p-8 space-y-4 flex 
                flex-col justify-center items-center 
                sm:border-[1px] sm:border-gray-300 
                sm:rounded-lg
                sm:hover:border-myBlack sm:transition 
                sm:duration-300`}>

                    <img src= {cryptoTodayPic} className="w-32 box-s" alt="image"/>
                    
                    <h6 className= 
                    {`text-myBlack text-lg f
                    ont-medium font-Poppins
                    `}>Crypto Today
                    </h6>

                    <ul className = "text-gray-600 ">

                        <li className = "mb-1">Single Page App</li>
                        <li className = "mb-1">Coingecko API</li>
                                               

                    </ul>

                    <div className = "flex">
                        
                        <p className = 
                        {`flex items-center 
                        text-sky-400 sm:text-xl
                        `}>
                            <FaReact />

                            <span className = 
                            {`text-slate-500 font-mono 
                            text-xs font-semibold ml-1 mr-3
                            `}>React
                            </span>
                        </p>

                        <p className = 
                        {`flex items-center 
                        text-teal-500 sm:text-lg
                        `}>
                            <SiTailwindcss />

                            <span className = 
                            {`text-slate-500 font-mono 
                            text-xs font-semibold ml-1
                            `}>Tailwind
                            </span>
                        </p>

                    </div>
                </a>
            </div>

        </div>
    </div>

</div> 
       





<div className= 
{`container mx-auto bg-gray-100 
px-6 sm:px-12 py-10 xl:px-0 
2xl:px-28 xl:py-24
`}>

    <div className= 
    {`mx-auto flex flex-col items-center 
    sm:items-start xl:items-center 
    sm:flex-row lg:w-2/3
    `}>

      <h1 
      className= 
      {`flex-grow text-2xl xl:text-[21px] 
      text-center font-medium text-myBlack 
      font-Poppins sm:text-left sm:pr-16
      `}>Download my CV and get to know more about me
      </h1>
      
      
        <a 
        href="https://drive.google.com/drive/folders/1wsHKlG7dwQ7rJXfTNE5zn3g9UclgSBz3?usp=sharing" 
        target= "_blank"
        className= 
        {`py-3 px-4 mt-10 flex-shrink-0 
        flex text-gray-100  
        bg-myBlack rounded sm:mt-0 xl:mr-20 
        hover:bg-myOtherBlack hover:text-white 
        transition duration-300
        `}>
        
            <span className= 
            {`mr-2 text-sm font-Poppins 
            font-medium
            `}>Download CV
            </span>

            <svg 
            className= 
            {`h-5 w-5 sm:h-6 sm:w-6 
            text-gray-100 hover:text-white
            `} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor">
            <path  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>

        </a>

    </div>

</div>

                                
        
        </>
    )
}
    
      
