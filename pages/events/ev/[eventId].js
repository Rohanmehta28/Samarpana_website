import {useRouter} from 'next/router'
import EventSpecificPage from '../../../components/common/EventSpecificPage'

function Ev(){
    const router= useRouter()
    const eventId=router.query.eventId
    if (eventId=="1.js"){
        return (
            <EventSpecificPage
                imgUrl="/assets/e1.jpg" date= "November 12th, 2022" img2="/assets/image.jpeg" eventtitle = "Bakesale"
                
            />
        )
    }

    else if (eventId=="2.js"){
        return (
            <EventSpecificPage
                imgUrl="/assets/bb.png" date= "November 12th, 2022" img2="/assets/image.jpeg" eventtitle = "Bakesale"
                
            />
        )
    }

    else if (eventId=="3.js"){
        return (
            <EventSpecificPage
                imgUrl="/assets/mic.png" date= "November 12th, 2022" img2="/assets/image.jpeg" eventtitle = "Bakesale"
                
            />
        )
    }

    else if (eventId=="4.js"){
        return (
            <EventSpecificPage
                imgUrl="/assets/e1.jpg" date= "November 12th, 2022" img2="/assets/image.jpeg" eventtitle = "Bakesale"
                
            />
        )
    }

    else if (eventId=="5.js"){
        return (
            <EventSpecificPage
                imgUrl="/assets/bb.png" date= "November 12th, 2022" img2="/assets/image.jpeg" eventtitle = "Bakesale"
                
            />
        )
    }

    else if (eventId=="6.js"){
        return (
            <EventSpecificPage
                imgUrl="/assets/mic.png" date= "November 12th, 2022" img2="/assets/image.jpeg" eventtitle = "Bakesale"
                
            />
        )
    }
}

export default Ev;
