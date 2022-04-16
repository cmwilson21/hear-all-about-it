import { React, useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
// import Select from "react-select";
// import { useNavigate } from "react-router-dom";

export default function MenuListComposition(articles) {
  const [arts, setArts] = useState(articles);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

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
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const newsSources = [
    { label: "All News", id: "all" },
    { label: "ABC News", id: "abc-news" },
    { label: "Associated Press", id: "associated-press" },
    { label: "BBC News", id: "bbc-news" },
    { label: "CBS News", id: "cbs-news" },
    { label: "CNN", id: "cnn" },
    { label: "Fox News", id: "fox-news" },
    { label: "Politico", id: "politico" },
    { label: "Reuters", id: "reuters" },
    { label: "The Washington Post", id: "the-washington-post" },
  ];

  // create function to filter the articles based on the selected source.id if the source.id is not equal to all then filter the articles based on the selected source.id
  const filterArticles = (articles, id) => {
    // create variable to display the articles based on the selected source.id
    let filteredArticles = [];
    // if the source.id is equal to all then display all the articles, else filter the articles based on the selected source.id and display those articles

    if (id === "all") {
      return articles;
    } else {
      return articles.articles.articles.filter((article) => {
        return article.source.id === id;
      });
    }
  };

  return (
    <Stack direction="row" spacing={2}>
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
                    {newsSources.map((source) => (
                      <MenuItem
                        key={source.id}
                        onClick={() => {
                          setOpen(false);
                          handleClose(true);
                          setArts(filterArticles(articles, source.id));
                          console.log("source.id", source.id);
                          console.log(
                            "display",
                            filterArticles(articles, source.id)
                          );
                        }}
                      >
                        {source.label}
                      </MenuItem>
                    ))}
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

//   return (
//     <div>
//       <Stack>
//         <Button
//           ref={anchorRef}
//           aria-controls={open ? "menu-list-grow" : undefined}
//           aria-haspopup="true"
//           onClick={handleToggle}
//         >
//           Filter
//         </Button>
//         <Popper

//           open={open}
//           anchorEl={anchorRef.current}
//           role={undefined}
//           transition
//           disablePortal
//         >

//           {({ TransitionProps, placement }) => (
//             <Grow
//               {...TransitionProps}
//               style={{
//                 transformOrigin:
//                   placement === "bottom" ? "center top" : "center bottom",
//               }}
//             >
//               <Paper>
//                 <ClickAwayListener onClickAway={handleClose}>
//                   <MenuList

//                     autoFocusItem={open}
//                     id="menu-list-grow"
//                     onKeyDown={handleListKeyDown}
//                   >
//                     <MenuItem onClick={handleFilter}>
//                       <Select
//                         id="source-select"
//                         options={articles.sources}
//                         onChange={handleFilter}
//                         defaultValue={articles.sources[0]}
//                       />
//                     </MenuItem>
//                   </MenuList>
//                 </ClickAwayListener>
//               </Paper>
//             </Grow>
//           )}
//         </Popper>
//       </Stack>
//     </div>
//   );
//

// <MenuItem
//   handleClose(true);
// key={source.id}
// set on click to filter articles by id
// onClick={() => {
//   setOpen(false, filterArticles(articles, source.id)),
//     handleClose(true);
// }}
// >
{
  /* {source.label} */
}

// </MenuItem>

// <MenuItem
//   key={source.id}
//   onClick={() => {
//     setOpen(false);
//     // console.log("articles", articles);
//     console.log("source.id", source.id);
//     console.log(
//       "filterArticles(articles, source.id)",
//       filterArticles(
//         articles.articles.articles,
//         source.id
//       )
//     );
//   }}
// >
//   {source.label}
// </MenuItem>
