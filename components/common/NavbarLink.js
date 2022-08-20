import Link from 'next/link'
import { useRouter } from 'next/router'

function NavbarLink(props) {
  const router = useRouter()

  return (
    <Link href={props.path} smooth={true} offset={50} duration={500}>
      <a
        className={`cursor-pointer link px-3 py-2 text-md ${
          router.pathname == props.path ? 'active' : ''
        }`}
      >
        {props.title}
      </a>
    </Link>
  )
}

export default NavbarLink
