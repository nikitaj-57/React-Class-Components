import React from "react";
import "./styles.css";

const userData = {
  name: "Nikita Jit",
  handle: "nikitajit3",
  avatar:
    "https://png.pngtree.com/png-clipart/20190516/original/pngtree-cute-girl-avatar-material-png-image_4023832.jpg",
};

const friends = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
  { id: 4, name: "D" },
  { id: 5, name: "E" },
  { id: 6, name: "F" },
];

class Name extends React.Component {
  render() {
    const { name } = this.props;
    return <h4>{name}</h4>;
  }
}

class Handle extends React.Component {
  render() {
    const { handle } = this.props;
    return <p>@{handle}</p>;
  }
}

class Avatar extends React.Component {
  render() {
    const { avatarImg } = this.props;
    return <img className="badgeImg" src={avatarImg} alt="" />;
  }
}

class Badge extends React.Component {
  render() {
    const { userData } = this.props;
    return (
      <div className="handle">
        <Avatar avatarImg={userData.avatar} />
        <div>
          <Name name={userData.name} />
          <Handle handle={userData.handle} />
        </div>
      </div>
    );
  }
}

class ListComponent extends React.Component {
  render() {
    const { friends } = this.props;
    return (
      <ul style={{ color: "white" }}>
        {friends.map((friend) => (
          <li key={friend.id}>{friend.name}</li>
        ))}
      </ul>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Badge userData={userData} />;
        <ListComponent friends={friends} />
      </div>
    );
  }
}
