// Header.js
import React, { useContext } from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import colorVariables from '../styles/variables.scss';
import { ThemeContext } from '../context/ThemeContext';

// create and define styled elements (elements with styles) first, these components are going to be used to build the main component

// The styled variable contains many functions representing all known HTML elements, this allows us to style heading tags, img tags e.t.c

const navBg = theme('mode', {
  light: colorVariables.bodyColor,
  dark: colorVariables.primary
});
const Nav = styled.div.attrs({
  className: 'container'
})`
  background-color: ${navBg};
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;
const NavHeader = styled.div.attrs({
  className: 'row'
})`
  align-items: center;
  margin: 0 auto;
`;
const NavLeft = styled.div.attrs({
  className: 'col-4'
})`
  text-align: left;
  color: ${props => (props.theme.mode === 'dark' ? '#fff' : '#000')};
`;
const NavCenter = styled.div.attrs({
  className: 'col-4'
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
  className: 'col-4'
})`
  text-align: right;
  svg {
    margin-right: 20px;
  }
`;
const MenuLink = styled.a`
  color: ${props => (props.theme.mode === 'dark' ? '#fff' : '#000')};
  padding: 0 10px;
  box-size: border-box;
`;
function Header() {
  const { toggleTheme } = useContext(ThemeContext);
	return (
		<Nav>
			<NavHeader>
        <NavLeft>
          <h3>Stylagram</h3>
          <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={toggleTheme} />
            <label className="custom-control-label" htmlFor="customSwitch1">Switch theme</label>
          </div>
        </NavLeft>
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
