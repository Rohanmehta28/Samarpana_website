import Link from 'next/link'
import { useRouter } from 'next/router'

function NavbarLinkMobile(props) {
  const router = useRouter()

  return (
    <div>
      <Link href={props.path} smooth={true} offset={50} duration={500}>
        <a
          className={`cursor-pointer link block py-2 rounded-md text-step-0 px-3 font-medium ${
            router.pathname == props.path ? 'active' : ''
          }`}
        >
          {props.title}
        </a>
      </Link>
    </div>
  )
}

export default NavbarLinkMobile
