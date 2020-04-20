import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../redux/reducers/user';
import { setRepositories } from "../redux/reducers/repositories";
import { Grid } from "@material-ui/core";
import i18n from '../translations';

function UserDetails({ match = { params: { username: '' } } }) {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const repositories = useSelector(store => store.repositories);
  useEffect(() => {
    if (match.params.username) {
      dispatch(setUser(match.params.username));
      dispatch(setRepositories(match.params.username));
    }
    // eslint-disable-next-line
  }, [dispatch, user.id, match.params.username, repositories.length]);
  const renderUserNotFount = () => {
    return (
      <Grid container className="userDetail">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <p>{i18n.t('userNotFound')}</p>
        </Grid>
      </Grid>
    )
  };
  const renderContent = () => {
    return (
      <Grid container>
        <div className="userDetail">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="detailContainer">
              <img src={user.avatar_url} alt={user.name} />
            </div>
            <div className="detailContainer">
              <p className="label">{i18n.t('name')}</p>
              <p className="content">{user.name}</p>
            </div>
            <div className="detailContainer">
              <p className="label">{i18n.t('id')}</p>
              <p className="content">{user.id}</p>
            </div>
            <div className="detailContainer">
              <p className="label">{i18n.t('login')}</p>
              <p className="content">{`@${user.login}`}</p>
            </div>
            <div className="detailContainer">
              <p className="label">{i18n.t('location')}</p>
              <p className="content">{user.location}</p>
            </div>
            <div className="detailContainer">
              <p className="label">{i18n.t('bio')}</p>
              <p className="content">{user.bio}</p>
            </div>
            <div className="detailContainer">
              <p className="label">{i18n.t('public_repos')}</p>
              <p className="content">{user.public_repos}</p>
            </div>
            <div className="detailContainer">
              <p className="label">{i18n.t('followers')}</p>
              <p className="content">{user.followers}</p>
            </div>
            <div className="detailContainer">
              <p className="label">{i18n.t('following')}</p>
              <p className="content">{user.following}</p>
            </div>
          </Grid>
          {repositories.length ? (
            <div className="detailContainer repositories">
              <p className="label repoList">{i18n.t('repositories')}</p>
              {repositories.map(repository => {
                return (
                  <Grid item xs={12} sm={12} md={12} lg={12} key={repository.id}>
                    <a href={repository.html_url}>
                      <div className="detailContainer">
                        <p className="label">{i18n.t('name')}</p>
                        <p className="content">{repository.full_name}</p>
                      </div>
                      <div className="detailContainer">
                        <p className="label">{i18n.t('starts')}</p>
                        <p className="content">{repository.stargazers_count}</p>
                      </div>
                    </a>
                  </Grid>
                );
              })}
            </div>
          ) : null}
        </div>
      </Grid>
    );
  };
  return (
    <div id="userDetailsPage">
      {user.id ? renderContent() : renderUserNotFount()}
    </div>
  );
}

export default withRouter(UserDetails);
