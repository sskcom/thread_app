import * as React from "react"; 
import { useState, useEffect } from "react"; 
import Box from "@mui/material/Box"; 
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem"; 
import ListItemButton from "@mui/material/ListItemButton"; 
import ListItemText from "@mui/material/ListItemText"; 
import Divider from "@mui/material/Divider"; 
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar"; 
import Toolbar from "@mui/material/Toolbar"; 
import Button from "@mui/material/Button";
import CommentOutlinedIcon from "@mui/icons-material/Comment";

import { Link } from "react-router-dom"; 
import axios from 'axios';




function ThreadListScreen() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    

    
    axios
      .get(
        "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
        {
          params: { offset: 0 },
       
        }
      )
      .then((response) => {
        if (response.status === 200) {
          // スレッド作成に成功した場合に実行される処理
          setThreads(response.data);
        } else {
          // スレッド作成に失敗した場合に実行される処理
        }
      })
      .catch((error) => {
        // リクエストが失敗した場合に実行される処理
      });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          掲示板
        </Typography>
        <Button variant="contained" component={Link} to="/new">
          スレッド新規作成
        </Button>
      </Toolbar>
    </AppBar>
    <Box sx={{ margin: "2rem auto", maxWidth: "800px" }}>
      <Typography variant="h4" component="h1" sx={{ mb: "1rem" }}>
        スレッド一覧
      </Typography>
      <List sx={{ bgcolor: 'background.paper' }}>
  {threads.map((thread) => (
    <React.Fragment key={thread.id}>
      <ListItem disablePadding>
        <ListItemButton
          component={Link}
          to={`/threads/${thread.id}`}
          sx={{
            display: 'flex',
            py: 2,
            borderRadius: '12px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
            },
            color: 'black',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '3rem',
              height: '3rem',
              borderRadius: '50%',
              backgroundColor: '#EFEFEF',
              marginRight: '1rem',
            }}
          >
            <CommentOutlinedIcon sx={{ fontSize: '1.5rem' }} />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h5" component="h2" sx={{ mb: '0.5rem' }}>
              {thread.title}
            </Typography>
            <Typography variant="body1" component="p">
              {thread.body}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="caption" component="span" sx={{ mb: '0.2rem' }}>
              {new Date(thread.createdAt).toLocaleString()}
            </Typography>
            <Typography variant="caption" component="span">
              {thread.post_count} comments
            </Typography>
          </Box>
        </ListItemButton>
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  ))}
</List>



    </Box>
  </Box>
  

  

  );
}

export default ThreadListScreen;
