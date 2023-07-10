import React from "react";
import { FollowBar } from "./FollowBar";
import { MenuBar } from "./MenuBar";
import "./MainContainer.css";
import { Navbar } from "./Navbar";
import { RequireAuth } from "../RequireAuth";
import { CommentBox } from "./CommentBox";
import { useData } from "../Context/DataContext";
import { EditProfile } from "./Profile/EditProfile";
import { AddPost } from "./AddPost";

export const MainContainer = ({ children }) => {
  const { commentToggle, setEditBtn, editBtn, btnAddPost, darkMode } =
    useData();
  return (
    <>
      <RequireAuth>
        <Navbar />
        <div className={`mainContainer ${darkMode && "bgDarkmode"}`}>
          <div>
            <MenuBar />
          </div>
          <div> {children}</div>
          {btnAddPost && <AddPost />}
          {commentToggle && (
            <div className="overComment">
              <CommentBox />
            </div>
          )}
          {editBtn && <div className="editBox-bottom"></div>}

          {editBtn && (
            <div className="editBox-Main">
              <EditProfile setEditBtn={setEditBtn} editBtn={editBtn} />
            </div>
          )}
          <div className="dektop-followbar">
            <FollowBar />
          </div>
        </div>
      </RequireAuth>
    </>
  );
};
