import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
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

    // Sends a request to the /followers/ endpoint
    // and information about what profile (id)
    // the user had followed (clicked)

    const handleFollow = async (clickedProfile) => {
        try {
            const { data } = await axiosRes.post('/followers/', {
                followed: clickedProfile.id,
            });
            setProfileData(prevState => ({
                ...prevState,
                pageProfile: {
                    results: prevState.pageProfile.results.map((profile) =>
                        followHelper(profile, clickedProfile, data.id)
                    ),
                },
            }));
        } catch (err) {
            console.log(err)
        }
    }

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
            <SetProfileDataContext.Provider value={{ setProfileData, handleFollow }}>
                {children}
            </SetProfileDataContext.Provider>
        </ProfileDataContext.Provider>
    );
};
