import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {FormattedMessage} from 'react-intl';
import App from './App';
import {IntlProvider} from "react-intl";
import locales from './locales';

export default function TranslationMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [locale, setLocale] = React.useState('en');
  const messages = locales[`${locale}`];

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div align = 'left'>
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
          <MenuItem onClick={() => setLocale('en')}>
          <FormattedMessage id="app.translate.english"
                defaultMessage="English"
                description="translate english"/>
          </MenuItem>
          <MenuItem onClick={() => setLocale('es')}>
          <FormattedMessage id="app.translate.spanish"
                defaultMessage="Spanish"
                description="translate spanish"/>
          </MenuItem>
          <MenuItem onClick={() => setLocale('ja')}>
          <FormattedMessage id="app.translate.japanese"
                defaultMessage="Japanese"
                description="translate japanese"/>
          </MenuItem>
          <MenuItem onClick={() => setLocale('zh')}>
          <FormattedMessage id="app.translate.chinese"
                defaultMessage="Chinese"
                description="translate chinese"/>
          </MenuItem>
          <MenuItem onClick={() => setLocale('fr')}>
          <FormattedMessage id="app.translate.french"
                defaultMessage="French"
                description="translate french"/>
          </MenuItem>
        </Menu>
      </div>
      <App />
    </IntlProvider>
  );
}
