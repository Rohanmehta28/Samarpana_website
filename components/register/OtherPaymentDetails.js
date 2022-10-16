import Image from 'next/image'
import { useMemo } from 'react'

function OtherPaymentDetails({ age, distance }) {
  const agePriceMap = useMemo(() => {
    return {
      olderThan22: {
        5: 600,
        10: 750,
        21: 950,
      },
      youngerThan22: {
        5: 400,
        10: 550,
        21: 750,
      },
    }
  }, [])

  return (
    <div className="p-4 border-2 border-slate-500 rounded-lg">
      <h3 className="text-center text-step-1 font-bold">
        Payment Details for NON - PES University participants
      </h3>

      <div className="text-step--1 my-4">
        <h4 className="font-bold text-step-1 p-2 border-2 border-green-600 rounded-lg text-green-600 my-4">
          Payment to be done : Rs.
          {distance && age > 22
            ? agePriceMap.olderThan22[distance]
            : agePriceMap.youngerThan22[distance]}
        </h4>
        <ul>
          <li className="border-t-2 pt-4">
            <p className="font-bold text-step-0 my-3">Method 1 : UPI</p>
            <Image
              unoptimized
              src="/assets/PES_UPI.jpeg"
              alt="QR CODE"
              layout="responsive"
              width={727}
              height={1280}
            />
          </li>
          <li className="border-t-2 pt-4">
            <p className="font-bold text-step-0 my-3">Method 2 : NEFT/RTGS</p>
            <p>
              <b>Name of the Account : </b> PES UNIVERSITY-GENERAL FUND
            </p>
            <p>
              <b>Bank A/c no. : </b> 589301010050057
            </p>
            <p>
              <b>Branch code : </b> 558931
            </p>
            <p>
              <b>Type of Account</b> Current ACCOUNT{' '}
            </p>
            <p>
              <b>Name of Bank & address :</b> Union Bank of India, PESIT branch,
              100 Feet Ring Road, BSK 3rd Stage, Bangalore-560 085
            </p>
            <p>
              <b>NEFT/IFSC Code of bank : </b> UBIN0558931
            </p>
            <p>
              <b>MICR code of bank : </b> 560026037
            </p>
            <p>
              <b>SWIFT CODE :</b> UBININBBGNB
            </p>
            <p>
              <b>PAN no : </b> AAAJP1445N
            </p>
            <p>
              <b>Contact telephone no : </b> 080-26722448/26722449 Extn.
              307/505/{' '}
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default OtherPaymentDetails
