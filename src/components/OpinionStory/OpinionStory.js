import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <Link href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  padding: 16px 0;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-gray-300);
  }

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  @media ${QUERIES.tabletOnly} {
    padding-top: 0;
    padding-bottom: 0;

    &:not(:last-child) {
      border-bottom: none;
    }
  }
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  float: right;
  margin-left: 16px;

  @media ${QUERIES.tabletOnly} {
    float: none;
    margin-left: 0;
    margin-bottom: 8px;
  }
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
