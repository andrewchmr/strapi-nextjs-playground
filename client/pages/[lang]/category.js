import { useRouter } from "next/router";
import Articles from "../../components/articles";
import Query from "../../components/query";
import Layout from "../../components/Layout";
import CATEGORY_ARTICLES_QUERY from "../../apollo/queries/category/articles";
import withLocale from '../../hocs/withLocale';

const Category = () => {
  const router = useRouter();

  return (
    <Layout titleKey="Category">
    <Query query={CATEGORY_ARTICLES_QUERY} id={router.query.id}>
      {({ data: { category } }) => {
        return (
            <div className="uk-section">
              <div className="uk-container uk-container-large">
                <h1>{category.name}</h1>
                <Articles articles={category.articles} />
              </div>
            </div>
        );
      }}
    </Query>
    </Layout>
  );
};

export default withLocale(Category);