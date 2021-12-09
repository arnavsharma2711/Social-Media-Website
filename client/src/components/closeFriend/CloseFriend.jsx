import "./closeFriend.css";

export default function CloseFriend({friends}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={friends.profilePicture ? PF + friends.profilePicture : PF + "person/noAvatar.png"} alt="" />
      <span className="sidebarFriendName">{friends.fullName ? friends.fullName : friends.username }</span>
    </li>
  );
}