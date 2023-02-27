import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";
import axios from "axios";

function ThreadNewScreen() {
  // ステートフックを使って、スレッドタイトルとスレッド内容の状態を管理する
  const [body, setTitle] = useState("");
  // const [body, setBody] = useState("");
  // useNavigate フックを使って、useNavigate オブジェクトを取得する
  const navigate = useNavigate();

  // フォームが送信された時に実行される関数
  const handleSubmit = (event) => {
    // デフォルトのフォームの送信処理をキャンセルする
    event.preventDefault();
    // ここでスレッドの新規作成処理を実行する

    const sample_data = {
      id: 1,
      title: "スレッドタイトル",
    };

    const data = JSON.stringify({ threadId: 0, title: body });
    // const data = JSON.stringify(sample_data);

    console.log(typeof data);
    console.log(data);

    axios
      .post(
        "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          navigate("/");
        } else {
         
          
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            掲示板
          </Typography>
          <Button variant="contained" component={Link} to="/">
            ホーム
          </Button>
        </Toolbar>
      </AppBar>

      {/* フォームを作成する */}
      <form onSubmit={handleSubmit}>
        {/* スレッドタイトルを入力するフィールドを作成する */}
        <TextField
          label="スレッドタイトル"
          variant="outlined"
          fullWidth
          margin="normal"
          value={body}
          onChange={(event) => setTitle(event.target.value)}
        />

        {/* フォームを送信するためのボタンを作成する */}
        <Button type="submit" variant="contained" color="primary">
          作成する
        </Button>
      </form>
    </Box>
  );
}

export default ThreadNewScreen;
