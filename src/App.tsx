import { Layout } from "./layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignUp } from "./views/sign-up";
import { SignIn } from "./views/sign-in";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
