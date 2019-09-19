// Header.js
import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';


// create and define styled elements (elements with styles) first, these components are going to be used to build the main component

// The styled variable contains many functions representing all known HTML elements, this allows us to style heading tags, img tags e.t.c

const navBg = theme('mode', {
  light: '#fff',
  dark: '#000'
});
const Nav = styled.div`
  background-color: ${navBg};
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;
// this is how to use styled WITH ANY FRAMEWORK, just add desired class to the attrs object and apply styles
// https://medium.com/@pitipatdop/10-useful-tips-for-styled-components-b7710b021e6a
const NavHeader = styled.div.attrs({
    className: 'grid-x'
  })`
  padding: 26px 20px;
  align-items: center;
`;
const NavLeft = styled.div.attrs({
  className: 'cell small-12 medium-4'
})`
  text-align: left;
  color: ${props => (props.theme.mode === 'dark' ? '#fff' : '#000')};
`;
const NavCenter = styled.div.attrs({
  className: 'cell medium-4 small-12'
})`
  text-align: center;
`;
const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;
  &:active,
  &:focus {
    text-align: left;
  }
`;
const NavRight = styled.div.attrs({
  className: 'cell small-12 medium-4'
})`
  text-align: right;
  svg {
    margin-right: 20px;
  }

  @media (max-width: 500px) {
    background: palevioletred;
    text-align: center;
  }
`;
const MenuLink = styled.a`
  color: ${props => (props.theme.mode === 'dark' ? '#fff' : '#000')};
  padding: 0 10px;
  box-size: border-box;
`;
function Header() {
	return (
		<Nav>
			<NavHeader>
				<NavLeft>Stylagram</NavLeft>
				<NavCenter>
					<Input type="text" placeholder="Search" />
				</NavCenter>
				<NavRight>
					<MenuLink href="#">
						Compass
					</MenuLink>
					<MenuLink href="#">
						Explore
					</MenuLink>
					<MenuLink href="#">
						Avatar
					</MenuLink>
				</NavRight>
			</NavHeader>
		</Nav>
	);
}
export default Header;
