import Head from 'next/head'
import Page from '../../components/common/Page'
import Image from 'next/image'

function Event(props){

    return(<div>
        {/* <head> <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200&family=Poppins:wght@200;300&display=swap" rel="stylesheet"/></head> */}

    {/*RECTANGLE 1*/}

        
        {/*div for the ENTIRE rectangle*/}
        <div style={{padding : "20px"}}>
        <Image class="rounded-2xl" src={props.bg} height = {"725"} width ={"2160"} display={"relative"}/>
        
        {/*div for next button*/}
        {/*--------------------------------------------------------------------------------------------------------------------------------*/}
        <a href={props.next}>
        <div style={{/* Vector */

                    position:" relative",
                    width: "60px",
                    height :"60px",
                    left: "93.75%",
                    
                    bottom: "85px",

                    background: "#F8F8F8",
                    // transform: "matrix(0, -1, -1, 0, 0, 0)",
                    borderRadius : "50%"
                    }}>
            <div style={{position: "absolute",
                                    top :"25%",
                                    left : "25%"
                        }}> 
                <Image src="/assets/front_arrow.jpeg" height = {30} width = {30} style ={{margin :"auto"}} />
                            
            </div>
        </div>
        </a>
        {/*--------------------------------------------------------------------------------------------------------------------------------*/}

        {/*div for text*/}
        {/*--------------------------------------------------------------------------------------------------------------------------------*/}
         
        <div class="relative w-[500px]">
            
            <div class="absolute bottom-20 left-0 right-0 px-4 py-2">
                <h3 className="text-left text-5xl pl-9 pb-3.5 py-11" style={{fontFamily:"Poppins, sansSerif", color:"#FFFFFF"}}>
                    {props.eventtitle}</h3>
                <div style={{width:"140%"}}>
                <p className="text-lg text-xl pl-9 pb-5 font-'Poppins'" style={{ color:"#FFFFFF"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nunc, platea varius tellus morbi massa vitae. Sagittis placerat egestas adipiscing mus eleifend nisl. Eget ultrices fusce cursus quis lobortis auctor tempus velit consequat.</p>
                </div>
            </div>
        </div>
       
        {/*--------------------------------------------------------------------------------------------------------------------------------*/}
        {/*div for calendar*/}
        {/*--------------------------------------------------------------------------------------------------------------------------------*/}

        <div style={{/* Vector */           
                position:" relative",
                width: "70px",
                height :"70px",
                left: "93.75%",
                bottom: "1140px",

                }}>
            <div style={{position: "absolute",
                top :"620px",
                width:"50px",
                background:"white",
                borderRadius: "5px",
                 }}> 
        
                
                <h1 className='pl-2 pt-2'style={{fontFamily:"'Poppins', sansSerif", color:"#000000"}}>NOV</h1>
                <h2 className='pl-4'style={{fontFamily:"'Poppins', sansSerif", color:"#000000"}}>10</h2>
        
            </div>
        </div>

        </div>
        </div>

    )
        
}

export default Event;

