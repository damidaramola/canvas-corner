import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";

const ProfileDataContext = createContext();
const SetProfileDataContext = createContext();

//2 custom hooks for each context object
export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

export const ProfileDataProvider = ({ children }) => {
    const [profileData, setProfileData] = useState({
      pageProfile: { results: [] }
    });
  
    const currentUser = useCurrentUser();
  
    useEffect(() => {
      const handleMount = async () => {
        try {
          await axiosReq.get(
            "/profiles/?ordering=-followers_count"
          );
          setProfileData((prevState) => ({
            ...prevState
          }));
        } catch (err) {
          console.log(err);
        }
      };
  
      handleMount();
    }, [currentUser]);
  
    return (
      <ProfileDataContext.Provider value={profileData}>
        <SetProfileDataContext.Provider value={setProfileData}>
          {children}
        </SetProfileDataContext.Provider>
      </ProfileDataContext.Provider>
    );
  };
