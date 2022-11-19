import { MdOutlineEmail} from "react-icons/md";

export function Footer() {

    return(

        <>
        
<div >
    <nav className="bg-gray-100 shadow sm:mt-8 md:mt-0 " id="contact">

        <div className="max-w-7xl mx-auto px-8 ">

            <div className="flex items-center justify-between h-16  ">

                <div className="w-full  flex items-center justify-between">

                    <a className="flex-shrink-0 flex items-center text-myBlack" href="mailto:oswaldoe1992@gmail">
                      <MdOutlineEmail className=""/>
                      <span className="font-normal text-sm hover:text-slate-900 transition duration-300 ml-1 text-myBlack font-Poppins">Oswaldoe1992@gmail.com</span>
                    </a>

                    

                    <div className="">
                        
                        <div className="ml-10 flex items-baseline sm:space-x-2">

                            <a className="text-myBlack px-1 sm:px-0 py-2 rounded-md text-xl hover:text-slate-900 transition duration-300 " 
                                href="https://api.whatsapp.com/send/?phone=4244181500&text&type=phone_number&app_absent=0" target= "_blank">
                              <i className= "uil uil-whatsapp mb-2"></i> 
                            </a>

                            <a className="text-myBlack px-1 sm:px-0 py-2 rounded-md text-xl hover:text-slate-900 transition duration-300 " 
                                href="https://www.linkedin.com/in/oswaldo-diaz-milanes-951319146/" target= "_blank">
                              <i className= "uil uil-linkedin mb-2"></i> 
                            </a>

                            <a className="text-myBlack px-1 sm:px-0 py-2 rounded-md text-xl hover:text-slate-900 transition duration-300 " 
                                href="https://github.com/OswaldoDM" target= "_blank">
                              <i className= "uil uil-github-alt mb-2"></i> 
                            </a>                    
                            
                            
                        </div>
                    </div>

                </div>


                <div className="block">
                    <div className="ml-4 flex items-center md:ml-6">
                    </div>
                </div>                
                

            </div>
        </div>

        
    </nav>
</div>
  
        </>
    )
}


        