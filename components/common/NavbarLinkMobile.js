import Link from 'next/link'
import { useRouter } from 'next/router'

function NavbarLinkMobile(props) {
  const router = useRouter()

  return (
    <div className={router.pathname == props.path ? 'active' : ''}>
      <Link
        href={props.path}
        smooth={true}
        offset={50}
        duration={500}
        className="cursor-pointer at block px-3 py-2 rounded-md text-step-0 font-medium"
      >
        <a className="cursor-pointer at block px-3 py-2 rounded-md text-step-0 font-medium">
          {props.title}
        </a>
      </Link>
    </div>
  )
}

export default NavbarLinkMobile
