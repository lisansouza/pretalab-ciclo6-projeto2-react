import { profileData } from "../data/profile-data";

export const Bio = () => {
  return (
    <div className="card">
      <h2>{profileData.name}</h2>
      <img src={profileData.photo} width="150" />
      <p>{profileData.nickname}</p>
      <p>{profileData.description}</p>
      <link>{profileData.link}</link>
    </div>
  );
};
