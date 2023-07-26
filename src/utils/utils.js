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
  } catch (err) {}
};

export const followHelper = (profile,clickedProfile,following_id) => {
  return profile.id === clickedProfile.id
  ? // profile that is clicked on,
    // update its followers count and set its following id
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
}