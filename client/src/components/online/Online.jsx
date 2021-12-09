import "./online.css";

export default function Online({friends}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={friends.profilePicture ? PF + friends.profilePicture : PF + "person/noAvatar.png"} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{friends.fullName ? friends.fullName : friends.username }</span>
    </li>
  );
}
