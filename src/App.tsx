import "./App.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";
import { UserProfile } from "./types/userProfile";

function App() {
  const { userProfiles, loading, error, getUsers } = useAllUsers();
  const onClickFetchUser = () => getUsers();
  return (
    <div className="App">
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user: UserProfile) => (
            <UserCard user={user} />
          ))}
        </>
      )}
      <button onClick={onClickFetchUser}>データを取得</button>
    </div>
  );
}

export default App;
