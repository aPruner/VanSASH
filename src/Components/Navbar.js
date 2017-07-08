import React from 'react';
import AppBar from 'material-ui/AppBar';

class NavBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <AppBar
        title="Adam Pruner"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }
}
export default NavBar;
