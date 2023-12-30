import React from "react";
import List from "@mui/material/List";

const MenuItem = ({ item }) => {
  const isLink = item.to !== undefined;

  if (isLink) {
    return (
      <ListItem
        button
        component={Link}
        to={item.to}
        href={`#${item.to}`}
        style={{ paddingLeft: `${item['tag-level'] * 20}px` }}
        key={item.title}
      >
        <ListItemIcon>{/* Add your icon logic here */}</ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItem>
    );
  } else {
    return (
      <React.Fragment>
        <ListItem
          button
          style={{ paddingLeft: `${item['tag-level'] * 20}px` }}
          key={item.title}
        >
          <ListItemIcon>{/* Add your icon logic here */}</ListItemIcon>
          <ListItemText primary={item.title} />
          {item.items && (
            item.items.length > 0 ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          )}
        </ListItem>
        {item.items && (
          <Collapse in={true} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.items.map((child, key) => (
                <MenuItem key={key} item={child} />
              ))}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    );
  }
};



const ContentBar = ({ menu }) => {
  return (
    <List>
      {menu.map((item, key) => (
        <MenuItem key={key} item={item} />
      ))}
    </List>
  );
};

export default ContentBar;