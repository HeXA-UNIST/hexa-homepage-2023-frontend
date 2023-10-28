import "@css/app/App.css";
import "@css/app/Hexa.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "mobx-react";

import LoginStore from "common/stores/LoginStore";


import HomePage from "pages/home";
import IntroductionPage from "@pages/introduction";
import ProjectPage from "pages/projects";
import ServicePage from "pages/services";
import NoticePage from "@pages/notice";
// import Activities from "pages/activities";
import LoginPage from "@pages/login";

function App() {
  return (
    <div className="App">
      <Provider loginStore={new LoginStore()}>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/introduction" element={<IntroductionPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/notice" element={<NoticePage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/activities" element={<Activities />} /> */}
            <Route path="/*" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
