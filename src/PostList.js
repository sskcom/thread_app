import React from "react";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";

function PostList({ posts }) {
  const posts_list = posts.posts;

  return (
    <Box sx={{ marginTop: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        投稿一覧
      </Typography>

      <List sx={{ bgcolor: "background.paper" }}>
        {posts_list &&
          posts_list.length > 0 &&
          posts_list.map((post, index) => (
            <React.Fragment key={post.id}>
              <ListItem
                disablePadding
                sx={{
                  py: 2,
                  borderRadius: "12px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                  },
                  color: "black",
                }}
              >
                <Avatar sx={{ bgcolor: "primary.main", mr: 2 }}>
                  <PersonIcon />
                </Avatar>
                <ListItemText primary={post.post} />
              </ListItem>
              {index !== posts_list.length - 1 && (
                <Divider
                  variant="inset"
                  component="li"
                  sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                />
              )}
            </React.Fragment>
          ))}
      </List>
    </Box>
  );
}

export default PostList;
