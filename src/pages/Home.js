import React, { useState } from 'react';
import { Redirect, withRouter } from "react-router-dom";
import { Grid, Button, Input, InputAdornment } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import i18n from '../translations';

function Home() {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const search = () => {
    setShowErrorMessage(false);
    if (searchInputValue.trim()) {
      setShouldRedirect(true);
    } else {
      setShowErrorMessage(true);
      setShouldRedirect(false);
    }
  };
  return (
    <div id="homePage">
      <Grid container>
        <div className="containerDefinition">
          <Grid container>
            <Grid item xs={12} sm={12} md={10} lg={10}>
                <Input
                  className="searchInput"
                  id="searchField"
                  placeholder={i18n.t('searchLabel')}
                  onChange={criteria => {
                    if (criteria.target.value.trim()) {
                      setSearchInputValue(criteria.target.value.trim());
                      setShowErrorMessage(false);
                    } else {
                      setShowErrorMessage(true);
                    }
                  }}
                  startAdornment={
                    <InputAdornment position="start">
                      <GitHubIcon />
                    </InputAdornment>
                  }
                />
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2}>
              <div className="btnContainer">
                <Button
                  variant="contained"
                  color="default"
                  className="searchBtn"
                  onClick={search}
                >
                  {i18n.t('search')}
                </Button>
              </div>
            </Grid>
          </Grid>
          {showErrorMessage ? (
            <Grid container className="errorMessageContainer">
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <p>{i18n.t('errorSearchMessageInput')}</p>
              </Grid>
            </Grid>
          ) : null}
        </div>
      </Grid>
      {shouldRedirect ? <Redirect to={`/user-details/${searchInputValue}`} /> : null}
    </div>
  );
}

export default withRouter(Home);
