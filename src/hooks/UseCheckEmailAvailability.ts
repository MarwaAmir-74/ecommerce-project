import axios from 'axios';
import { useState } from 'react'
export default function UseCheckEmailAvailability() {
    type TStatus = "idle" | "checking" | "available" | "notAvailable" | "failed";
    const [emailAvailabilityStatus,setEmailAvailabilityStatus] = useState<TStatus>('idle')
    const [prevEmail,setPrevEmail] = useState<string|null>(null)
    const checkEmailAvailability = async (email:string) =>{
        setEmailAvailabilityStatus('checking')
        setPrevEmail(email)
        try{
            const response = await axios.get(`http://localhost:5000/users?email=${email}`)
            if(!response.data.length){
                setEmailAvailabilityStatus('available')
            }
        else{
            setEmailAvailabilityStatus('notAvailable')
        }
        }
        catch(error){
            setEmailAvailabilityStatus('failed')
        }
    }
    const resetCheckEmailAvailability = () =>{
        setEmailAvailabilityStatus('idle')
        setPrevEmail(null)
    }
  return {emailAvailabilityStatus,prevEmail,checkEmailAvailability,resetCheckEmailAvailability}
}

 