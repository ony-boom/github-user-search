import "./styles/resultBox.scss";
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const UserAbout = ({ name, login, bio, created_at }) => {
  const parseDate = created_at.split("T")[0];
  const date = parseDate.split("-");
  return (
    <div className="user-about">
      <div className="user-about__profile">
        <h2 id="user">{name}</h2>
        <p id="user-name">@{login}</p>
        <p id="bio">{bio}</p>
      </div>
      <p id="sign-up-date">
        Joined at {date[2]} {month[date[1] - 1]} {date[0]}
      </p>
    </div>
  );
};

const Stat = ({ label, count, id }) => {
  return (
    <div className="state-box" id={`${id}-box`}>
      <p className="simple-paragraph">{label}</p>
      <p className="count">{count}</p>
    </div>
  );
};

const UserStat = ({ public_repos, followers, following }) => {
  return (
    <div className="user-stat">
      <Stat count={public_repos} id="repos" label="Repos" />
      <Stat count={followers} id="followers" label="Followers" />
      <Stat count={following} id="following" label="Following" />
    </div>
  );
};

const Result = ({
  avatar_url,
  name,
  bio,
  login,
  created_at,
  public_repos,
  followers,
  following,
  message,
  clicked,
  userToFind,
}) => {
  return (
    <div className="result-box">
      <div className="row">
        {message ? (
          <h2 className={"error"}>Seems like you mistype the username😨😭</h2>
        ) : avatar_url ? (
          <>
            <div className="user-profile">
              <img src={`${avatar_url}`} alt="" />
            </div>
            <div className="right">
              <UserAbout
                name={name}
                bio={bio}
                login={login}
                created_at={created_at}
              />
              <UserStat
                followers={followers}
                following={following}
                public_repos={public_repos}
              />
            </div>
          </>
        ) : clicked && userToFind ? (
          <h2>Searching {userToFind}... 🔍🧐🚀</h2>
        ) : (
          <h2>Find someone 😁👆</h2>
        )}
      </div>
    </div>
  );
};

export default Result;
