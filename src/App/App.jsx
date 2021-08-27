import { ToastProvider } from "react-toast-notifications";
import Discusstion from "../Container/Discusstion/Discussion";

const App = () => {
  return (
    <ToastProvider>
      <Discusstion />
    </ToastProvider>
  );
}

export default App;
