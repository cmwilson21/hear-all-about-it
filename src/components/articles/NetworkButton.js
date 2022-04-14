import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";

export default function MenuListComposition(articles) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  console.log("button page", articles);
  // create filter function to filter articles by source_id
  const filterArticles = (articles, source_id) => {
    return articles.filter((article) => article.source_id === source_id);
  };
  const [filteredArticles, setFilteredArticles] = useState(
    filterArticles(articles.articles, "abc-news")
  );

  return (
    <Stack direction="row" spacing={2}>
      {/* <Paper>
        <MenuList>
          <MenuItem>CNN</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Paper> */}
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Filter by Network
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem id="abc-news" onClick={handleClose}>
                      ABC News
                    </MenuItem>
                    <MenuItem id="associated-press" onClick={handleClose}>
                      Associated Press
                    </MenuItem>
                    <MenuItem id="bbc-news" onClick={handleClose}>
                      BBC News
                    </MenuItem>
                    <MenuItem id="cbs-news" onClick={handleClose}>
                      CBS News
                    </MenuItem>
                    <MenuItem id="cnn" onClick={handleClose}>
                      CNN News
                    </MenuItem>
                    <MenuItem id="fox-news" onClick={handleClose}>
                      Fox News
                    </MenuItem>
                    <MenuItem id="politico" onClick={handleClose}>
                      Politico
                    </MenuItem>
                    <MenuItem id="reuters" onClick={handleClose}>
                      Reuters
                    </MenuItem>
                    <MenuItem id="the-washington-post" onClick={handleClose}>
                      Washington Post
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
