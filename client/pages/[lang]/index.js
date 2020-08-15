import React from "react";
import Articles from "../../components/articles";
import Query from "../../components/query";
import ARTICLES_QUERY from "../../apollo/queries/article/articles";
import withLocale from '../../hocs/withLocale';
import Nav from "../../components/nav";

const Home = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Strapi blog</h1>
          <Nav />
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return <Articles articles={articles} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default withLocale(Home);