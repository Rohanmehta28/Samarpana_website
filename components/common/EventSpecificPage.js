
import {useRouter} from 'next/router'
import Head from 'next/head'
import Page from '../common/Page'
import Image from 'next/image'

function EventSpecificPage(props){
    
return ( 
        <div>
            {/* <head> <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200&family=Poppins:wght@200;300&display=swap" rel="stylesheet"/></head> */}

            <Page >
            <h1 className="text-grey text-center text-5xl py-11 font-'Manrope', sans-serif;">EVENTS</h1>
            
            <div style={{padding : "20px"}}>
            <Image class="w-full h-1/2 rounded-2xl"
                    src={props.imgUrl}
                    height = {"625"}
                    width ={"2160"}
                    display={"relative"}
            
            />
            <div class="absolute bottom-20 left-0 right-0 px-4 py-2">
                <h1 className="text-center text-9xl pb-40 font-'Poppins' tracking-wider" style={{color:"#FFFFFF"}}>
                    {props.eventtitle}</h1>
                <div style={{width:"140%"}}>
                </div>
            </div>
            <a href='/events'>
            <div style={{/* Vector */

                        position:" relative",
                        width: "60px",
                        height :"60px",
                        left: "1%",
                        
                        bottom: "400px",

                        background: "#F8F8F8",
                        // transform: "matrix(0, -1, -1, 0, 0, 0)",
                        borderRadius : "50%"
                        }}>
                <div style={{position: "absolute",
                                        top :"25%",
                                        left : "25%"
                            }}> 
                                
                    <Image 
                        src="/assets/arrow.png"
                        height = {30}
                        width = {30}
                        style ={{margin :"auto"}}
                    />
                                
                </div>
            </div>
            </a>

            </div>           
            <div style={{
                boxSizing: "border-box",
                margin:"auto",
                width: "563px",
                height: "95px",
                border: "4px solid #072642",
                borderRadius: "15px"
                }}>
        
                <div style={{
                    position: 'relative',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    }}>

                    <div style ={{
                            display:"inline",
                            marginLeft: "160px"
                    }}>
            
                        <Image src={"/assets/calendar.png"} 
                            height = {30}
                            width = {30}
                            style ={{
                                margin:"auto"
                        }}/>
                    </div>
                    <div style={{
                                    position: 'absolute',
                                    top: '25%',
                                    transform: 'translateY(-25%)',
                                    marginLeft: "20px",
                                    display : "inline"
                                }}>
                        <p className="font-'red-hat'" style={{display:"inline",fontSize:"1.5rem", color:"#000000"}}>3rd september, 2022</p></div>
                </div>
            </div>
            <br>
            </br>
            <br>
            </br>
            
            <div style={{marginLeft:"20px", marginRight:"20px"}}>
    
            <table>
                <tr>
                    <td width="50%" leftPadding="40px" style={{fontFamily:"'Poppins', sansSerif", color:"#000000"}}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nunc, platea varius tellus morbi massa vitae. Sagittis placerat egestas adipiscing mus eleifend nisl. Eget ultrices fusce cursus quis lobortis auctor tempus velit consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nunc, platea varius tellus morbi massa vitae. Sagittis placerat egestas adipiscing mus eleifend nisl. Eget ultrices fusce cursus quis lobortis auctor tempus velit consequat.</td>
                    <td align="left" style={{leftMargin:"10px"}}>               
                    <img class="w-11/12 h-96 rounded-md"
                        src={props.img2}
                        alt="product" />                       
                    </td>
                </tr>
                <tr>
                <td align="left" style={{leftMargin:"10px"}}>     
                    <img class="w-11/12 h-96 rounded-md"
                        src={props.img2}
                        alt="product" />       
                </td>
                <td width="50%" leftPadding="30px"> <div leftPadding="30px" style={{fontFamily:"'Poppins', sansSerif", color:"#000000"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nunc, platea varius tellus morbi massa vitae. Sagittis placerat egestas adipiscing mus eleifend nisl. Eget ultrices fusce cursus quis lobortis auctor tempus velit consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nunc, platea varius tellus morbi massa vitae. Sagittis placerat egestas adipiscing mus eleifend nisl. Eget ultrices fusce cursus quis lobortis auctor tempus velit consequat.</div></td>
                </tr>

            </table>
        </div>
        </Page>
        </div> )
}
export default EventSpecificPage;
