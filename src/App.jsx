import SideBar from "./component/SideBar";
import CreatePost from "./component/CreatePost";
import Posts from "./component/Posts";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { DataProvider } from "./store/store";

function App() {
  const [selectedTab, SetSelectedTab] = useState("Home");
  return (
    <DataProvider>
      <div className="container">
        <div className="home-row">
          <SideBar
            selectedTab={selectedTab}
            SetSelectedTab={SetSelectedTab}
          ></SideBar>

          <DataProvider>
            <div className="wrapper">
              {selectedTab == "Home" ? (
                <Posts></Posts>
              ) : (
                <CreatePost SetSelectedTab={SetSelectedTab}></CreatePost>
              )}
            </div>
          </DataProvider>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
