import React from "react";
import { useStyles } from "../pages/Home/theme";
import { Dispatch, SetStateAction } from "react";

interface TagsPopupProps {
  classes: ReturnType<typeof useStyles>;
  // handleClick: (id: number) => void;
  setVisiblePopup: Dispatch<SetStateAction<boolean>>;
}
export const TagsPopup: React.FC<TagsPopupProps> = ({
  classes,
  setVisiblePopup,
}: TagsPopupProps) => {
  const ref = React.useRef<any>();
  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setVisiblePopup(false);
    }
  };
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
  return (
    <div className={classes.rightSideMenuTagsPopup} ref={ref}>
      <span className={classes.rightSideMenuTagsPopupSpan}>Не интересно</span>
      <span className={classes.rightSideMenuTagsPopupSpan}> Не интересно</span>
    </div>
  );
};
