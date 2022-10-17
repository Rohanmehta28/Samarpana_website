import Link from 'next/link'

function PESPaymentDetails() {
  return (
    <div className="p-4 border-2 border-slate-500 rounded-lg">
      <h3 className="text-center text-step-1">
        Payment Details for participants from PES University
      </h3>
      <div>
        <ul className="ml-4 text-step--1">
          <li className="list-decimal">
            Go to{' '}
            <Link href="https://www.pesuacademy.com/Academy/" passHref>
              <a target="_blank" rel="noreferrer">
                <span className="underline text-indigo-800 font-bold cursor-pointer">
                  {' '}
                  www.pesuacademy.com{' '}
                </span>
              </a>
            </Link>
          </li>
          <li className="list-decimal">
            Click on <b>Online Payments</b> Section in the Navigation bar
          </li>
          <li className="list-decimal">Go to Miscellanous Fees Tab/Section</li>
          <li className="list-decimal">
            Select <b>Samarpana Run</b> under <b>Category</b>
          </li>
          <li className="list-decimal">
            Select the <b>distance</b> under <b>Sub-Category</b>
          </li>
          <li className="list-decimal">
            Read the <b>Terms and Conditions</b>
          </li>
          <li className="list-decimal">Make the payment</li>
        </ul>
      </div>
    </div>
  )
}

export default PESPaymentDetails
