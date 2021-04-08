import { useRouter } from "next/router"

const Header = () => {
   const router=useRouter()
   
    return (
        <header>
            <Image onClick={()=>router.push("/")}  />
        </header>
    )
}

export default Header
