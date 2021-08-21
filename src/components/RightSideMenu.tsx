import React from "react";

import { Typography } from "@material-ui/core";
import { useStyles } from "../pages/Home/theme";
import { SearchTextField } from "./SearchTextField";
import { useDispatch, useSelector } from "react-redux";
import { selectTagsItems } from "../store/ducks/tags/selectors";
import { fetchTags } from "../store/ducks/tags/actionCreators";
import { fetchSuggestedUsers } from "../store/ducks/suggestedUsers/actionCreators";
import { selectSuggestedUsersItems } from "../store/ducks/suggestedUsers/selectors";

import { Tags } from "./Tags";
import { SuggestedUsers } from "./SuggestedUsers";

interface RightSideMenuProps {
  classes: ReturnType<typeof useStyles>;
}

export const RightSideMenu: React.FC<RightSideMenuProps> = ({
  classes,
}: RightSideMenuProps) => {
  const dispatch = useDispatch();
  const tags = useSelector(selectTagsItems);
  const suggestedUsers = useSelector(selectSuggestedUsersItems);

  React.useEffect(() => {
    dispatch(fetchTags());
    dispatch(fetchSuggestedUsers());
  }, [dispatch]);

  return (
    <div className={classes.rightSideMenu}>
      <SearchTextField fullWidth placeholder="Поиск по Твиттеру" />
      <div className={classes.rightSideMenuTweets}>
        <div style={{ padding: 13 }}>
          <Typography variant="h6">Актуальные темы для вас</Typography>
        </div>

        {tags?.map((tag) => (
          <Tags tag={tag} classes={classes} />
        ))}
      </div>

      <div className={classes.rightSideMenuSuggestedProfiles}>
        <div style={{ padding: 13 }}>
          <Typography variant="h6">Кого читать</Typography>
        </div>

        <div className={classes.suggestedProfilesCards}>
          {suggestedUsers?.map((suggestedUser) => (
            <SuggestedUsers classes={classes} suggestedUser={suggestedUser} />
          ))}
        </div>
      </div>
    </div>
  );
};
