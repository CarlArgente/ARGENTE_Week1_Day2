import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
const Display = ({ userData }) => {
  return (
    <>
      {userData.map((user) => {
        return (
          <React.Fragment key={user.name}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card sx={{ width: "42%" }} style={{ marginTop: "15px" }}>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {user.name}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Display;
