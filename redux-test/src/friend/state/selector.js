import { createSelector } from 'reselect';

export const getFriends = state => state.friend.friends;
export const getAgeLimit = (_, ageLimit) => ageLimit; // 단순히 두 번째 매개변수를 사용한다.
export const getShowLimit = state => state.friend.showLimit;

// export const getFriendsWithAgeLimit = createSelector(
//   [getFriends, getAgeLimit],
//   (friends, ageLimit) => friends.filter(friend => friend.age <= ageLimit)
// );
// export const getFriendsWithAgeShowLimit = createSelector(
//   [getFriendsWithAgeLimit, getShowLimit],
//   (friendsWithAgeLimit, showLimit) => friendsWithAgeLimit.slice(0, showLimit)
// );

export const makeGetFriendsWithAgeLimit = () => {
  return createSelector([getFriends, getAgeLimit], (friends, ageLimit) =>
    friends.filter(friend => friend.age <= ageLimit)
  );
};