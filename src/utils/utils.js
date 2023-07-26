import jwtDecode from "jwt-decode";
import { axiosReq } from "../api/axiosDefaults";


// updates data for the InfiniteScroll component
//   which Sends a request to the following page of results
//   Filters out duplicates of the posts 
export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (err) { }
};

export const followHelper = (profile, clickedProfile, following_id) => {
  return profile.id === clickedProfile.id
    ? // profile that is clicked on,
    // updates its followers count and sets its following id
    {
      ...profile,
      followers_count: profile.followers_count + 1,
      following_id,
    }
    : profile.is_owner
      ? // profile of the logged in user
      // update its following count
      { ...profile, following_count: profile.following_count + 1 }
      : // this is not the profile the user clicked on or the profile

      profile;
};


//Decreases the number of followers of profile clicked by - 1
//Decreases the number of following users by - 1

export const unfollowHelper = (profile, clickedProfile) => {
  return profile.id === clickedProfile.id
    ? // This is the profile I clicked on,
    // updates its followers count and sets its following id
    {
      ...profile,
      followers_count: profile.followers_count - 1,
      following_id: null,
    }
    : profile.is_owner
      ? // This is the profile of the logged in user
      // update its following count
      { ...profile, following_count: profile.following_count - 1 }
      : // this is not the profile the user clicked on or the profile
      // the user owns, so just return it unchanged
      profile;
};

// extracts expiry date from access token and save
// to users browser in local storage 
export const setTokenTimestamp = (data) =>{
  const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp
  localStorage.setItem('refreshTokenTimestamp', refreshTokenTimestamp)
}

// checks if expiry date exists in users local storage 
//will check weather to refresh the users token or not
export const shouldRefreshToken = () =>{
  return !!localStorage.getItem('refreshTokenTimestamp')
}

//removes refresh token timestamp from local storage
export const removeTokenTimestamp =() =>{
  localStorage.removeItem('refreshTokenTimestamp')
}