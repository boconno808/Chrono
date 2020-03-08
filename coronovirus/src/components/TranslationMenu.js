import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {FormattedMessage} from 'react-intl';

export default function TranslationMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <FormattedMessage id="app.translateTitle"
              defaultMessage="Translate"
              description="translate menu"/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => 'en'}>
        <FormattedMessage id="app.translate.english"
              defaultMessage="English"
              description="translate english"/>
        </MenuItem>
        <MenuItem onClick={() => 'fr'}>
        <FormattedMessage id="app.translate.french"
              defaultMessage="French"
              description="translate french"/>
        </MenuItem>
        <MenuItem onClick={() => 'zh'}>
        <FormattedMessage id="app.translate.chinese"
              defaultMessage="Chinese"
              description="translate chinese"/>
        </MenuItem>
        <MenuItem onClick={() => 'es'}>
        <FormattedMessage id="app.translate.spanish"
              defaultMessage="Spanish"
              description="translate spanish"/>
        </MenuItem>
        <MenuItem onClick={() => 'ja'}>
        <FormattedMessage id="app.translate.japanese"
              defaultMessage="Japanese"
              description="translate japanese"/>
        </MenuItem>
      </Menu>
    </div>
  );
}
