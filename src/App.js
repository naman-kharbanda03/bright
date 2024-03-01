import logo from "./logo.svg";
import "./App.css";
import { ProgressBar } from "react-bootstrap";
import { LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);
  const onClick = () => {
    for (var i = 0; i <= 100; i++) {
      setProgress(i);
      // setTimeout(() => {}, 1000);
      setInterval(1000);
    }
    // setProgress((prev) => prev + 1);
  };

  // useEffect(() => {
  //   if (progress > 0) {
  //     setProgress((prev) => prev + 1);
  //     console.log(progress);
  //   }
  // }, [progress]);

  return (
    <div className="App">
      <div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "500px",
              height: "200px",
              backgroundColor: "#F5F5F5",
              padding: "20px",
            }}
          >
            <div style={{ display: "flex" }}>
              <LinearProgress
                sx={{
                  borderRadius: "20px",
                  height: "20px",
                  marginTop: "10%",
                  width: "90%",
                }}
                variant="determinate"
                value={progress}
              />
              {/* <div>{progress}</div> */}
            </div>

            <button
              onClick={onClick}
              style={{ marginLeft: "40%", marginTop: "10%" }}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
