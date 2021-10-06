import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <Wrapper>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
      <RightActionWrapper>
        <RightAction>
          <Button>Subscribe</Button>
          <Login>Already a subscriber?</Login>
        </RightAction>
      </RightActionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr 500px 1fr;
    align-items: baseline;
    margin-top: 16px;
    margin-bottom: 72px;
    padding-left: 32px;
    padding-right: 32px;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    color: var(--color-gray-900);
    background: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;

  @media ${QUERIES.laptopAndUp} {
    justify-content: flex-start;
    padding-left: 0;
    padding-right: 0;

    & > div:last-child {
      display: none;
    }
  }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const RightActionWrapper = styled.div`
  display: none;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const RightAction = styled.div`
  text-align: center;
`;

const Login = styled.a`
  font-size: 0.875rem;
  font-style: italic;
  color: var(--color-gray-900);
  text-decoration: underline;
  line-height: 1.6;
  display: inline-block;
  margin-top: 8px;
`;

export default Header;
