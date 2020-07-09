import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import UnorderedLists from './../utils/UnorderedLists';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

const CategoryLink = ({ slug, title }) => (
  <Link href={slug}>
    <a>{title}</a>
  </Link>
);

const CategoriesList = ({ categories }) => {
  return (
    <div className="section_panel d-flex flex-row align-items-center justify-content-start">
      <div className="section_title">Lastest posts</div>
      <div className="section_tags ml-auto">
        <UnorderedLists
          items={categories.slice(0, 5)}
          render={({ slug, title }) => <CategoryLink slug={slug} title={title} />}
        />
      </div>
      <div className="section_panel_more">
        <ul>
          <li>
            More <FontAwesomeIcon icon={faChevronCircleDown} />
            <UnorderedLists
              items={categories.slice(5)}
              render={({ slug, title }) => <CategoryLink slug={slug} title={title} />}
            />
          </li>
        </ul>
      </div>
    </div>
  )
};

CategoryLink.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

CategoriesList.propTypes = {
  categories: PropTypes.array.isRequired
};

export default CategoriesList;