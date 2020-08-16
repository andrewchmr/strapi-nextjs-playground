import React from "react";
import Articles from "../../components/articles";
import Query from "../../components/query";
import ARTICLES_QUERY from "../../apollo/queries/article/articles";
import withLocale from '../../hocs/withLocale';
import Layout from "../../components/Layout";

const Home = () => {
  return (
    <Layout titleKey="Strapi blog">
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Strapi blog</h1>
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return <Articles articles={articles} />;
            }}
          </Query>
        </div>
      </div>
    </Layout>
  );
};

export default withLocale(Home);