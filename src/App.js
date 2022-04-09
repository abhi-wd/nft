import "./App.css";
import Header from "./components/header";
import { useState, useEffect } from "react";
import axios from "axios";
import ShayriList from "./components/ShayriList";
import Main from "./components/Main";

function App() {
  const [shayriData, setshayriData] = useState([]);
  const [selectedShayri, setselectedShayri] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xAC0b720c38d7A6A6e3d0A312084E960Bc8386534"
      );
      setshayriData(openSeaData.data.assets);
    };
    return getMyNfts();
  }, []);
  return (
    <div className="app">
      <Header />
      {shayriData.length > 0 && (
        <>
          <Main shayriData={shayriData} selectedShayri={selectedShayri} />
          <ShayriList
            shayriData={shayriData}
            setselectedShayri={setselectedShayri}
          />
        </>
      )}
    </div>
  );
}

export default App;
