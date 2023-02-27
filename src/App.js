import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import ThreadNewScreen from "./ThreadNewScreen.js";
import ThreadListScreen from "./ThreadListScreen.js";
import ThreadDetailScreen from "./ThreadDetailScreen.js";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  
 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<ThreadListScreen />} />
          <Route exact path="/new" element={<ThreadNewScreen />} />
          <Route exact path="/threads/:id" element={<ThreadDetailScreen />} />
        </Routes>

        
      </BrowserRouter>

    </Box>
  );
}

export default App;
