import { useState } from 'react'
import Page from '../../components/common/Page'
import OfflineRegisterForm from '../../components/register/OfflineRegisterForm'

export default function OfflineReg() {
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  const updatePass = (e) => {
    setPassword(e.target.value)
  }
  const handleLogin = (e) => {
    e.preventDefault()
    if (password === '1234') {
      setLoggedIn(true)
    } else {
      alert('Wrong Password')
    }
  }

  return (
    <Page>
      <div className="max-w-5xl mx-auto">
        {!loggedIn ? (
          <>
            <h1 className="text-grey text-center text-5xl py-11 font-medium">
              Login
            </h1>
            <form method="POST">
              <label className="flex flex-col gap-1">
                Password
                <input
                  className="border-2 rounded-md p-1"
                  required
                  type="password"
                  name="password"
                  onChange={updatePass}
                  value={password}
                />
              </label>
              <button
                className="font-manrope text-[20px] text-black py-2 px-4 rounded-l-full rounded-r-full mt-5"
                style={{
                  border: '3px solid #5CF3BE',
                }}
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
          </>
        ) : (
          <div className="min-h-screen">
            <h1 className="text-grey text-center text-5xl py-11 font-medium">
              Offline Registration Form
            </h1>
            <OfflineRegisterForm />
          </div>
        )}
      </div>
    </Page>
  )
}
