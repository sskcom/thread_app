import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import axios from 'axios';

function PostForm({id}) {
  
  const [body, setBody] = useState("");
  const [id_num, setid] = useState(id);

  
  

  const handleSubmit = () => {

    const data = JSON.stringify({ threadId:id_num,post:body});

    axios.post('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/'+id_num+'/posts',data, {
        headers: {
          'Content-Type': 'application/json',
        },
       
  
      })
      .then(response => {
        if (response.status === 200) {
         
        } else {
          
        }
      })
      .catch(error => {
        console.error(error);
      });

  };

  return (
    <Box sx={{ marginTop: 2 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="スレッド投稿"
          variant="outlined"
          multiline
          fullWidth
          required
          margin="normal"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button type="submit" variant="contained">
            投稿する
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default PostForm;