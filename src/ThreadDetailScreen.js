import { useState, useEffect } from "react"; 
import { Box, Typography } from "@mui/material";
import PostList from "./PostList.js";
import PostForm from "./PostForm.js";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import { Link,useParams } from "react-router-dom";

import axios from 'axios';


function ThreadDetailScreen() {
 
  const [posts, setPosts] = useState([]);

  const { id } = useParams();
  const [thread, setThread] = useState([]);


  useEffect(() => {
    

    
    axios
      .get(
        'https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/'+id+'/posts',
        {
          params: { offset: 0 },
        
        }
      )
      .then((response) => {
        if (response.status === 200) {
          // スレッド作成に成功した場合に実行される処理
        
          setPosts(response.data);
    
        } else {
          // スレッド作成に失敗した場合に実行される処理
        }
      })
      .catch((error) => {
        // リクエストが失敗した場合に実行される処理
    
      });
  }, [posts]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          掲示板
        </Typography>
        <Button variant="contained" component={Link} to="/">
          ホーム
        </Button>
      </Toolbar>
    </AppBar>

      <PostList posts={posts} />
      <PostForm id={id} />
    </Box>
  );
}

export default ThreadDetailScreen;
