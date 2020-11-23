
const profileContent = () => {
  return (
    <Profile>
      <ProfileName>{isLoading ? <SkeletonLine /> : { username }}</ProfileName>
      <ProfileBio>{isLoading ? <SkeletonLine /> : { userBio }}</ProfileBio>
    </Profile>
  );
}

export default profileContent;