import { View, Text, Button } from "react-native";
import React from "react";

const Profile = () => {
  // const { signOut, isSignedIn } = useAuth();
  return (
    <View>
      <Button title="Log Out" />
      {/* {!isSignedIn && <Link href={"/(modals)/login"}>Log In</Link>} */}
    </View>
  );
};

export default Profile;
