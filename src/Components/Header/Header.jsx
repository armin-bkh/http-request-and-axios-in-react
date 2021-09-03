import Navigation from "../Navigation/Navigation";

const TheHeader = () => {
    return ( 
        <header className={`flex flex-col items-center h-40 justify-center`}>
            <h1>Manage comments</h1>
            <Navigation/>
        </header>
     );
}
 
export default TheHeader;