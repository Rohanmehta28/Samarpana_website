import { Transition } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import NavbarLink from './NavbarLink'
import NavbarLinkMobile from './NavbarLinkMobile'
import NavbarRegister from './NavbarRegister'
import sam from './samarpana.png'
//import Image from "next/image";
//import Logo from "../public/streamlineLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [_document, set_document] = useState(null)
  const [sticky, setSticky] = useState(true)
  const [hasInitialised, setHasInitialised] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(null)

  useEffect(() => {
    set_document(document)
    setScrollPosition(1)
  }, [])

  useEffect(() => {
    if (scrollPosition) setHasInitialised(true)
  }, [scrollPosition])

  const getScrollPosition = () => {
    const scrollPosition = _document.body.getBoundingClientRect()
    return scrollPosition.y
  }

  useEffect(() => {
    if (_document && scrollPosition != null) {
      const handleScroll = () => {
        const currentScrollPosition = getScrollPosition()
        setSticky(
          currentScrollPosition > scrollPosition || currentScrollPosition === 0
        )
        setScrollPosition(currentScrollPosition)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [sticky, hasInitialised, scrollPosition])

  const routes = [
    { title: 'Home', path: '/' },
    { title: "Events", path: '/events' },
    { title: 'Announcements', path: '/announcements' },
    { title: "Samarpana '19", path: '/samarpana-20' },
    { title: 'Registrations', path: '/registrations' },
  ]

  return (
    <div className=''>
      <nav
        className="navcontainer"
        style={{
          transform: sticky || isOpen ? 'translateY(0%)' : 'translateY(-100%)',
          transition: 'transform 0.3s ease-in',
          position: 'sticky',
          top: '0',
          zIndex: 99,
        }}
      >
        <div className="w-full bg-blue">
          <div className="flex items-center h-16 w-full ">
            <div className="flex items-center -96 md:mx-12 justify-between w-full">
              <div className="">
                <Link passHref href="/">
                  <a>
                    <Image
                      src={sam}
                      width={120}
                      height={50}
                      layout="intrinsic"
                      alt="PES Logo"
                      // className="invert placeholder-yellow-300 logo "
                    />
                  </a>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  {routes.map((link) => (
                    <NavbarLink key={link.title} {...link} />
                  ))}
                </div>
              </div>
            </div>
            <div className="mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center p-2 rounded-md text-white   "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-300 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100 "
          leave="transition ease-in duration-200 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden text-center" id="mobile-menu">
              <div
                ref={ref}
                className="bg-black pt-2 pb-3 space-y-1 sm:px-3"
              >
                {routes.map((link) => (
                  <NavbarLinkMobile key={link.title} {...link} />
                ))}
              </div>
            </div>
          )}
        </Transition>
      <NavbarRegister/>

      </nav>
    </div>
  )
}

export default Navbar
