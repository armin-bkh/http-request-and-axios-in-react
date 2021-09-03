import Navigation from "../Navigation/Navigation";

const TheHeader = () => {
    return ( 
        <header className={`flex flex-col items-center h-40 justify-center bg-white`}>
            <h1 className={`text-4xl font-medium`}>Manage comments</h1>
            <Navigation/>
        </header>
     );
}
 
export default TheHeader;