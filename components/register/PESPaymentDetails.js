function PESPaymentDetails() {
  return (
    <div className="p-4 border-2 border-slate-500 rounded-lg">
      <h3 className="text-center text-step-1">
        Payment Details for participants from PES University
      </h3>
      <div>
        <ul className="ml-4 text-step--1">
          <li className="list-decimal">
            Go to the <b>PESU Academy</b> website
          </li>
          <li className="list-decimal">
            <b>Online Payments</b> Section in the Navigation bar
          </li>
          <li className="list-decimal">Miscellanous Fees Tab/Section</li>
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
