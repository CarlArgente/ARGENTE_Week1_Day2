import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const DisplayGrocery = ({ groceryData }) => {
  console.log(groceryData);
  return (
    <>
      {groceryData.map((grocery) => {
        return (
          <React.Fragment key={grocery.id}>
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
                    {grocery.product}
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

export default DisplayGrocery;
