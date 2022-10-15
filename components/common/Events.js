import Head from 'next/head'
import Page from '../../components/common/Page'
import Image from 'next/image'

function Event(props){

    return(<div class="grid lg:justify-items-center lg:grid p-9 md:grid ">
        
     <div class="w-full rounded-2xl border-2 hover:shadow-2xl relative">
        <img class="w-full h-full rounded-t-1xl "
            src={props.image}
            alt={props.alt} />
        
        
  
  <p class="absolute bottom-36 left-14 text-5xl">Bakesale</p>
  <p class="absolute bottom-16 left-14 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nunc, platea varius tellus morbi massa vitae. Sagittis placerat egestas adipiscing mus eleifend nisl. Eget ultrices fusce cursus quis lobortis auctor tempus velit consequat.</p>
  </div>
            {/* <p class="leading-normal text-gray-700">
                {/* {props.description} */}
                
        
        
            
        {/* <p class="  justify-center  font-semibold  ">
           READ MORE</p> */}
           
        
           
        
        </div>
        

    )
        
}

export default Event;

