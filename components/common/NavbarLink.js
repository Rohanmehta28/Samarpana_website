import Link from 'next/link'
import { useRouter } from 'next/router'

function NavbarLink(props) {
  const router = useRouter()

  return (
    <div className={router.pathname == props.path ? 'active' : ''}>
      <Link href={props.path} smooth={true} offset={50} duration={500}>
        <div className=""></div>
        <a className="cursor-pointer link link-underline link-underline-black px-3 py-2 text-md">
          {props.title}
        </a>
      </Link>
    </div>
  )
}

export default NavbarLink
