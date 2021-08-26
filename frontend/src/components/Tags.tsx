import React from "react";
import { useStyles } from "../pages/Home/theme";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import { Tag } from "../store/ducks/tags/contracts/state";
import { Typography } from "@material-ui/core";
import { deleteTag } from "../store/ducks/tags/actionCreators";
import { useDispatch } from "react-redux";
import { TagsPopup } from "./TagsPopup";

interface TagsProps {
  classes: ReturnType<typeof useStyles>;
  tag: Tag;
}
export const Tags: React.FC<TagsProps> = ({ classes, tag }: TagsProps) => {
  const dispatch = useDispatch();
  const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false);
  const handleClick = (id: number) => {
    dispatch(deleteTag(id));
    setVisiblePopup(!visiblePopup);
  };
  React.useEffect(() => {
    document.body.style.pointerEvents = visiblePopup ? "none" : "all";
  }, [visiblePopup]);
  return (
    <React.Fragment>
      <div className={classes.rightSideMenuCard}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 0,
          }}
        >
          <span>Актуальные темы : Россия</span>
          <MoreHorizIcon onClick={() => setVisiblePopup(!visiblePopup)} />
        </div>
        <Typography variant="h6">{tag.name}</Typography>
        <span>Твитов : {tag.count}</span>
        {visiblePopup && (
          <TagsPopup
            classes={classes}
            handleClick={handleClick}
            id={tag.id}
            setVisiblePopup={setVisiblePopup}
          />
        )}
      </div>
    </React.Fragment>
  );
};
