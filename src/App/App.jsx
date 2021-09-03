import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import Layout from '../Layouts/Layout';
import routes from '../Routes/Routes';

const App = () => {
  return (
    <>
    <Layout>
      <Switch>
        {
          routes.map((route, index) => (
            <Route key={index} {...route} />
          ))
        }
      </Switch>
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
    </Layout>
    </>
  );
};

export default App;
