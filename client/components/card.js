import React, { useEffect } from "react";
import Link from "next/link";
import { I18nContext } from 'next-i18next'
import { useContext } from 'react'
import useTranslation from '../hooks/useTranslation';

const Card = ({ article }) => {
  const { locale, t } = useTranslation();

  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? article.image[0].url
      : process.env.API_URL + article.image[0].url;


  return (
    <Link href={{ pathname: `/[lang]/article`, query: { id: article.id } }}
      as={{ pathname: `/${locale}/article`, query: { id: article.id } }}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <img
              src={imageUrl}
              alt={article.image[0].url}
              height="100"
            />
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {article.category.name}
            </p>
            <p id="title" className="uk-text-large">
              {t(article, 'title')}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;