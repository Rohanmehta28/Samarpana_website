import { addDoc, collection, getFirestore, Timestamp } from 'firebase/firestore'
import { useCallback, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { db } from '../../utils/firebase'
import getAge from '../../utils/getAge'
import OtherPaymentDetails from './OtherPaymentDetails'
import PESPaymentDetails from './PESPaymentDetails'

/*
  Registration page
    - online registration
      - form
      - payment -> later
    - offline reg
      - admin login 
      - form -> name of collector
  */
export default function OnlineRegisterForm() {
  const formRef = useRef(null)
  const [age, setAge] = useState(0)

  const [participant, setParticipant] = useState({
    name: '',
    email: '',
    phone: '',
    pes: true,
    is_offline_registration: false,
    dob: '',
    distance: '5',
    srn: '',
    utr: '',
    collector: 'PES',
  })

  const updateDetails = useCallback((e) => {
    setParticipant((prev) => {
      let name = e.target.name
      let value = e.target.value
      if (name === 'pes') {
        value = value === 'Yes'
      } else if (name === 'dob') {
        let a = getAge(value)
        setAge(() => a)
      }
      // console.log(name, value, typeof value)
      return { ...prev, [name]: value }
    })
  }, [])

  const registerParticipant = useCallback(async () => {
    toast('Registering...')
    const p = { ...participant }
    p.timestamp = Timestamp.fromDate(new Date())
    let fs
    if (!db) {
      fs = getFirestore()
      await addDoc(collection(fs, 'participant'), p)
    } else {
      await addDoc(collection(db, 'participant'), p)
    }
    toast('Registered Successfully', { type: 'success' })
    try {
      formRef.current.clear()
    } catch {}
  }, [participant, formRef])

  const validateData = useCallback((participant) => {
    if (
      participant.name === '' ||
      participant.email === '' ||
      participant.phone === '' ||
      participant.distance === 0 ||
      (!participant.pes && participant.utr === '') ||
      participant.dob === ''
    ) {
      toast('Please fill all the fields', { type: 'error' })
      return false
    }

    if (
      !participant.email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      toast('Please enter a valid email address', { type: 'error' })
      return false
    }

    // validate phone number

    if (!participant.phone.match(/^[0-9]{10}$/)) {
      toast('Please enter a valid 10 digit phone number (No +91)', {
        type: 'error',
      })
      return false
    }

    // validate SRN
    if (
      participant.pes === true &&
      !participant.srn.match(/^(pes|PES)[1-2](ug|UG)(18|19|2[0-2])..\d\d\d/)
    ) {
      toast('Please enter a valid SRN', { type: 'error' })
      return false
    }

    // validate utr
    if (participant.pes === false && participant.utr === '') {
      toast('Please enter a valid transaction ID', { type: 'error' })
      return false
    }
    return true
  }, [])

  const handleRegistration = async (e) => {
    e.preventDefault()

    if (validateData(participant)) {
      try {
        registerParticipant()
      } catch {}
    } else {
      try {
        formRef.current.clear()
      } catch {}
    }
  }

  return (
    <div className="m-6 md:m-10">
      <form
        className="flex flex-col text-lg max-w-xl mx-auto gap-4"
        ref={formRef}
      >
        <label className="flex flex-col gap-1">
          Name
          <input
            className="border-2 rounded-md p-1"
            required
            type="text"
            name="name"
            onChange={updateDetails}
            value={participant.name}
          />
        </label>
        <label className="flex flex-col gap-1">
          Email
          <input
            className="border-2 rounded-md p-1"
            required
            type="email"
            name="email"
            onChange={updateDetails}
            value={participant.email}
          />
        </label>
        <label className="flex flex-col gap-1">
          Phone number
          <input
            className="border-2 rounded-md p-1"
            required
            type="text"
            name="phone"
            onChange={updateDetails}
            value={participant.phone}
          />
        </label>
        <label className="flex flex-col gap-1">
          Date Of Birth
          <input
            className="border-2 rounded-md p-1"
            required
            type="date"
            name="dob"
            onChange={updateDetails}
            value={participant.dob}
          />
        </label>
        <label className="flex flex-col gap-1">
          Are you from PES University?
          <select
            name="pes"
            onChange={updateDetails}
            className="border-2 rounded-md p-2"
            value={participant.pes ? 'Yes' : 'No'}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label className="flex flex-col gap-1">
          Marathon Distance
          <select
            name="distance"
            onChange={updateDetails}
            className="border-2 rounded-md p-2"
            value={participant.distance}
          >
            <option value="5">5 Km</option>
            <option value="10">10 Km</option>
            <option value="21">21 Km</option>
          </select>
        </label>

        {participant.pes || participant.pes === 'true' ? (
          <PESPaymentDetails />
        ) : (
          <OtherPaymentDetails age={age} distance={participant.distance} />
        )}

        {participant.pes ? (
          <>
            {/* <label className="flex flex-col gap-1">
              Transaction ID
              <input
                name="utr"
                onChange={updateDetails}
                type="text"
                className="border-2 rounded-md p-2"
                value={participant.utr}
              />
            </label> */}
            <label className="flex flex-col gap-1">
              SRN
              <input
                name="srn"
                onChange={updateDetails}
                type="text"
                className="border-2 rounded-md p-2"
                value={participant.srn}
              />
            </label>
          </>
        ) : (
          <label className="flex flex-col gap-1">
            UTR/UPI Transaction ID
            <input
              name="utr"
              onChange={updateDetails}
              type="text"
              className="border-2 rounded-md p-2"
              value={participant.utr}
            />
          </label>
        )}

        <button
          className="font-manrope text-[20px] text-black py-2 px-4 rounded-l-full rounded-r-full mt-5"
          style={{
            border: '3px solid #5CF3BE',
          }}
          onClick={handleRegistration}
        >
          Submit
        </button>
      </form>
    </div>
  )
}
