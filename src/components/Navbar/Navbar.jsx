import Links from "../Links/Links";


const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Profile", path: "/profile/:userId" },
    { id: 5, name: "Product Details", path: "/products/:productId" }
];

export default function Navbar({open}) {
    return (
        <>
            <nav >
                <ul className={`md:flex md:justify-around md:w-11/12 md:mx-auto w-fit p-5 shadow-lg bg-indigo-300 md:bg-transparent 
                ${open ? 'top-16': '-top-80'}
                 absolute md:static
                 duration-1000 `}  >
                    {
                        routes.map(route =>
                            <Links route={route} key={route.id}></Links>
                        )
                    }
                </ul>
            </nav>

        </>
    )
}
