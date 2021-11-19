import { Avatar } from "@material-ui/core";
import React from "react";
import { useStyles } from "../pages/Home/theme";
import { SuggestedUser } from "../store/ducks/suggestedUsers/contracts/state";

interface SuggestedUsersProps {
  classes: ReturnType<typeof useStyles>;
  suggestedUser: SuggestedUser;
}
export const SuggestedUsers: React.FC<SuggestedUsersProps> = ({
  classes,
  suggestedUser,
}: SuggestedUsersProps) => {
  return (
    <div className={classes.rightSideMenuCard} key={suggestedUser._id}>
      <div className={classes.suggestedProfilesCard}>
        <div className={classes.suggestedProfilesCardUser}>
          <Avatar alt={`Аватарка пользователя `} src="" />
          <div className={classes.suggestedProfilesCardUsername}>
            <span style={{ fontWeight: 700 }}>
              {suggestedUser.user.fullName}
            </span>

            <span>@{suggestedUser.user.userName}</span>
          </div>
        </div>
        <div>
          <button className={classes.suggestedProfilesCardButton}>
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};
