import { ToastContainer } from "react-toastify";
import Discusstion from "../Container/Discusstion/Discussion";

const App = () => {
  return (
    <>
      <Discusstion />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
