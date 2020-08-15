import React from "react";
import Link from "next/link"
import Query from "./query";
import CATEGORIES_QUERY from "../apollo/queries/category/categories";
import useTranslation from '../hooks/useTranslation';
import LocaleSwitcher from '../components/LocaleSwitcher';

const Nav = () => {
  const { locale } = useTranslation();

  return (
    <div>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
            <div>
              <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-left">
                  <ul className="uk-navbar-nav">
                    <li>
                      <Link href="/[lang]" as={`/${locale}`}>
                        <a>Strapi Blog</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <LocaleSwitcher />

                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                    {categories.map((category, i) => {
                      return (
                        <li key={category.id}>
                          <Link
                            href={{
                              pathname: "/[lang]/category",
                              query: { id: category.id },
                            }}

                            as={{
                              pathname: `/${locale}/category`,
                              query: { id: category.id },
                            }}
                          >
                            <a className="uk-link-reset">{category.name}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Nav;