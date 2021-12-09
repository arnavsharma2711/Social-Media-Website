import "./rightbar.css";
import Online from "../online/Online";
import { Add, MoreVert, Remove} from "@mui/icons-material";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FeedIcon from '@mui/icons-material/Feed';
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + currentUser._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [currentUser]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
    }
  };

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {friends.map((u) => (
            <Online key={u.id} friends={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <div className="info">
        <div className="infoTop">
        <div className="infoTopLeft">
          <h4 className="rightbarTitle infoTopLeft"><FeedIcon/>User information</h4>
        </div>      
            <div className="infoTopRight tooltip">
              <MoreVert />
              <span className="tooltiptext">Edit Profile</span>              
            </div>
          </div>

          <div className="rightbarInfo">
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">City:</span>
              <span className="rightbarInfoValue">{user.city}</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">From:</span>
              <span className="rightbarInfoValue">{user.from}</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">Relationship:</span>
              <span className="rightbarInfoValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "Commited"}</span>
            </div>
          </div>
        </div>
        <div className="info">
          <div className="friendsTop">
            <PeopleAltIcon/>
            <h4 className="rightbarTitle">Following</h4>
          </div>
          <div className="rightbarFollowings">
            {friends.map((friend) => (
              <Link to={"/profile/" + friend.username}style={{ textDecoration: "none",color:"black" }}>
                <div className="rightbarFollowing">
                  <img src={friend.profilePicture ? PF + friend.profilePicture : PF + "person/noAvatar.png"} alt=""className="rightbarFollowingImg"/>
                  <span className="rightbarFollowingName">{friend.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
