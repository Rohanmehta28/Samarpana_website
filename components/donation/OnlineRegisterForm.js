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
  const [donator, setDonator] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    pes: true,
    is_offline_registration: false,
    dob: '',
    distance: '5',
    srn: '',
    utr: '',
    collector: 'PES',
  })

  const updateDetails = useCallback((e) => {
    setDonator((prev) => {
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

  const registerDonator = useCallback(async () => {
    toast('Registering...')
    const p = { ...donator }
    p.timestamp = Timestamp.fromDate(new Date())
    let fs

    if (!db) {
      fs = getFirestore()
      await addDoc(collection(fs, 'donator'), p)
    } else {
      await addDoc(collection(db, 'donator'), p)
    }

    toast('Registered Successfully', { type: 'success' })

    // if (donator.pes) {
    //   toast('NOTE : You will now be redirected to PESU Academy for the payment.')
    //   setTimeout(() => {
    //     window.open('https://www.pesuacademy.com/Academy/', '_blank')
    //   }, 2000)
    // }

    try {
      formRef.current.clear()
    } catch {}
  }, [donator, formRef])

  const validateData = useCallback((donator, age) => {
    if (
      donator.name === '' ||
      donator.email === '' ||
      donator.phone === '' ||
      donator.amount === '' ||
      donator.distance === 0 ||
      donator.distance === '' ||
      donator.distance === '0' ||
      (!donator.pes && donator.utr === '') ||
      donator.dob === ''
    ) {
      toast('Please fill all the fields', { type: 'error' })
      return false
    }

    if (
      !donator.email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      toast('Please enter a valid email address', { type: 'error' })
      return false
    }
    // validate phone number

    if (!donator.phone.match(/^[0-9]{10}$/)) {
      toast('Please enter a valid 10 digit phone number (No +91)', {
        type: 'error',
      })
      return false
    }

    if (age < 5) {
      toast('Please enter valid DOB (>5 years)', {
        type: 'error',
      })
      return false
    }

    if (!donator.amount.match(/^\d{2,3,4,5,6,7,8,9}$/)) {
      toast('Please enter a valid Amounts', {
        type: 'error',
      })
      return false
    }

    // validate SRN
    if (donator.pes === true) {
      if (
        !(
          donator.srn.match(/^(pes|PES)[1-2](ug|UG)(18|19|2[0-2])..\d\d\d/) ||
          donator.srn.match(/^(pes|PES)\d\d\d\d\d\d\d\d\d\d/)
        )
      ) {
        toast('Please enter a valid SRN/ PRN', { type: 'error' })
        return false
      }
    }

    // validate utr
    if (donator.pes === false && donator.utr === '') {
      toast('Please enter a valid transaction ID', { type: 'error' })
      return false
    }
    return true
  }, [])

  const handleReset = useCallback(() => {
    setDonator(() => ({
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
    }))
    window?.scrollTo({ top: 0 })
  }, [])

  const handleRegistration = useCallback(
    async (e) => {
      e.preventDefault()

      if (validateData(donator, age)) {
        try {
          registerDonator()
          handleReset()
        } catch {}
      } else {
        try {
          formRef.current.clear()
        } catch {}
      }
    },
    [age, donator, registerDonator, formRef, validateData, handleReset]
  )

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
            value={donator.name}
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
            value={donator.email}
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
            value={donator.phone}
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
            value={donator.dob}
          />
        </label>
        {/* <label className="flex flex-col gap-1">
          Are you from PES University?
          <select
            name="pes"
            onChange={updateDetails}
            className="border-2 rounded-md p-2"
            value={donator.pes ? 'Yes' : 'No'}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label> */}
        {/* <label className="flex flex-col gap-1">
          Marathon Distance
          <select
            name="distance"
            onChange={updateDetails}
            className="border-2 rounded-md p-2"
            value={donator.distance}
          >
            <option value="5">5 Km</option>
            <option value="10">10 Km</option>
            <option value="21">21 Km</option>
          </select>
        </label> */}
        <label className="flex flex-col gap-1">
          Amount Donating
          <input
            className="border-2 rounded-md p-1"
            required
            type="text"
            name="amount"
            onChange={updateDetails}
            value={donator.amount}
          />
        </label>

        {donator.pes || donator.pes === 'true' ? (
          <OtherPaymentDetails age={age} distance={donator.distance} />
        ) : (
          <OtherPaymentDetails age={age} distance={donator.distance} />
        )}

        {donator.pes ? (
          <>
            {/* <label className="flex flex-col gap-1">
              Transaction ID
              <input
                name="utr"
                onChange={updateDetails}
                type="text"
                className="border-2 rounded-md p-2"
                value={donator.utr}
              />
            </label> */}
            <label className="flex flex-col gap-1">
              UTR/UPI Transaction ID
              <input
                name="utr"
                onChange={updateDetails}
                type="text"
                className="border-2 rounded-md p-2"
                value={donator.utr}
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
              value={donator.utr}
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
