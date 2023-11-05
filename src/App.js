import { useState } from "react";
import "./App.css";
import MUIPagination from "./components/MUIPagination";
import MUIUserInfos from "./components/MUIUserInfos";
import { METADATA } from "./const";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import VanillaUserInfos from "./components/VanillaUserInfos";
import VanillaPagination from "./components/VanillaPagination";
import Typography from "@mui/material/Typography";

function App() {
  const [vanillaDisplayData, setVanillaDisplayData] = useState();
  const [muiDisplayData, setMuiDisplayData] = useState();

  const getMuiPaginationInfo = (value) => {
    const showData = METADATA.slice(value.startIndex - 1, value.toIndex);
    setMuiDisplayData(showData);
  };

  const getVanillaPaginationInfo = (value) => {
    const showData = METADATA.slice(value.startIndex - 1, value.toIndex);
    setVanillaDisplayData(showData);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography variant="h2" align="center">
          Contact List
        </Typography>
        <div
          className="App"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div>
            {muiDisplayData ? (
              <MUIUserInfos displayData={muiDisplayData} />
            ) : (
              <p>Loading data...</p>
            )}
            <MUIPagination
              totalUser={METADATA.length}
              getPaginationInfo={getMuiPaginationInfo}
            />
          </div>
          <div>
            {vanillaDisplayData ? (
              <VanillaUserInfos displayData={vanillaDisplayData} />
            ) : (
              <p>Loading data...</p>
            )}
            <VanillaPagination
              totalUser={METADATA.length}
              getVanillaPaginationInfo={getVanillaPaginationInfo}
              // startIndex={startIndex}
              // toIndex={toIndex}
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
