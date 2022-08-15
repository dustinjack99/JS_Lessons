import { Card, Divider, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import "./Viewers.css";

const getViewers = async () => {
  const viewers = await fetch("https://jsonplaceholder.typicode.com/users");
  return await viewers.json();
};

const Viewers = () => {
  const [viewers, setViewers] = useState([]);

  useEffect(() => {
    //We need to call our Viewers API!
    //Take advantage of the "Mounting" phase of the lifecycle
  });

  return (
    <div className="user-container">
      <h2 className="user-title">Viewers</h2>
      <div className="viewers-list">
        {viewers.map(({ id, username, email }, i) => {
          return (
            <Card
              key={i + id}
              className="viewers-list-item"
              sx={{ margin: 4, borderColor: "#1976d2" }}
            >
              <Typography
                className="username"
                sx={{
                  backgroundColor: "#1976d2",
                  color: "white",
                  display: "block",
                  fontSize: 20,
                  paddingLeft: 2,
                  fontWeight: "bold",
                }}
              >
                {username}
              </Typography>
              <Divider />
              <Typography sx={{ fontsize: 8, textAlign: "center" }}>
                {email}
              </Typography>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Viewers;
