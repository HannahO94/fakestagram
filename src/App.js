import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import StartPage from "./pages/StartPage";
import ImageListPage from "./pages/ImageListPage";
import { Route, Switch } from "react-router-dom";
import LayoutSimple from "./components/LayoutSimple";
import ImageDetailPage from "./pages/ImageDetailPage";

function App() {
  return (
    <div className="App ">
      <Switch>
        <Route
          path="/image/:id"
          render={(props) => {
            return (
              <LayoutSimple>
                <ImageDetailPage {...props} />
              </LayoutSimple>
            );
          }}
        ></Route>

        <Route path="/image-list">
          <LayoutSimple>
            <ImageListPage />
          </LayoutSimple>
        </Route>
        <Route path="/">
          <LayoutSimple>
            <StartPage />
          </LayoutSimple>
        </Route>
      </Switch>
      {/* <ImageListPage /> */}
    </div>
  );
}

export default App;
