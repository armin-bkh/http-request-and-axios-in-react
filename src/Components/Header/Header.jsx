import Navigation from "../Navigation/Navigation";

const TheHeader = () => {
    return ( 
        <header className={`flex flex-col items-center h-10`}>
            <h1>Manage comments</h1>
            <Navigation/>
        </header>
     );
}
 
export default TheHeader;