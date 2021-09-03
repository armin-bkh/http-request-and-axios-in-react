import TheFooter from "../Components/Footer/Footer";
import TheHeader from "../Components/Header/Header";

const Layout = ({ children }) => {
    return ( 
        <>
        <TheHeader />
        {children}
        <TheFooter />
        </>
     );
}
 
export default Layout;