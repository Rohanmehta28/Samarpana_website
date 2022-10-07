// Name, email, phone, PES/Other, 5/10/21k, Name of person collecting

// import { addDoc, collection, getFirestore, Timestamp } from 'firebase/firestore'
import { Timestamp } from 'firebase/firestore'
import { useCallback, useRef, useState } from 'react'
import { db } from '../../utils/firebase'
import { confirm } from './ConfirmDialog'

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

  const [participant, setParticipant] = useState({
    name: '',
    email: '',
    phone: '',
    pes: true,
    distance: 0,
  })

  const updateDetails = useCallback(
    (e) => {
      setParticipant((prev) => {
        return { ...prev, [e.target.name]: e.target.value }
      })
    },
    [participant]
  )

  const registerParticipant = async () => {
    const p = { ...participant }
    p.timestamp = Timestamp.fromDate(new Date())
    let fs
    if (!db) {
      // fs = getFirestore()
      // await addDoc(collection(fs, 'participant'), p)
    } else {
      // await addDoc(collection(db, 'participant'), p)
    }
  }

  const handleRegistration = async (e) => {
    e.preventDefault()
    if (await confirm('Continue to payment?')) {
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
    <div>
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
          Are from PES University?
          <select
            name="pes"
            onChange={updateDetails}
            className="border-2 rounded-md p-2"
            value={participant.is_pes}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
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
            <option value={5}>5 Km</option>
            <option value={10}>10 Km</option>
            <option value={21}>21 Km</option>
          </select>
        </label>
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
