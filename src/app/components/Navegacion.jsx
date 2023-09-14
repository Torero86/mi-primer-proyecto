import Link from "next/link"
export default function Navegacion(){
    return(
        <header>
            <ul>
                <li> <Link href={"/"}>Home</Link></li>
                <li><Link href={"/contacto"}>contacto</Link></li>
            
            </ul>
        </header>
    )
}