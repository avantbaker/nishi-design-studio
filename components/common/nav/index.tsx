import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Flex } from 'rebass/styled-components';
import theme from 'styles/theme';
import { breakpoints } from 'styles/media';
import styled from 'styled-components';
import { rem } from 'polished';
import Text from 'components/common/text';
import HamburgerMenu from 'components/common/hamburger';

const NavContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	padding: ${rem(22)};

	&& a {
		:active,
		:hover,
		:focus {
			color: ${theme.colors.orange};
		}
	}

	&& a.selected {
		color: ${theme.colors.orange};
	}

	@media only screen and (min-width: ${breakpoints.laptop}) {
		padding: ${rem(24)} ${rem(45)} ${rem(38)} ${rem(45)};
	}
	@media only screen and (min-width: ${breakpoints.laptopLarge}) {
		padding: ${rem(24)} ${rem(80)} ${rem(38)} ${rem(80)};
	}
`;

const Img = styled.img`
	width: ${rem(92)};
	z-index: ${(props) => (props.isOpen ? '1' : 'initial')};
	@media only screen and (min-width: ${breakpoints.tablet}) {
		width: ${rem(150)};
	}
`;

const DesktopNav = styled.div`
	display: none;
	width: ${rem(378)};
	justify-content: space-between;

	a {
		text-decoration: none;
		padding-top: ${rem(10)};
	}

	@media only screen and (min-width: ${breakpoints.laptop}) {
		display: flex;
	}
`;

const MobileNav = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	z-index: 1;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100vh;
	box-sizing: border-box;
	background-color: ${theme.colors.lightTan};
	padding-top: ${rem(115)};
	padding-left: ${rem(24)};
	padding-bottom: ${rem(100)};

	> a {
		margin-bottom: ${rem(12)};
		font-size: ${rem(47)};
		line-height: ${rem(48)};
		text-decoration: none;
		color: ${theme.colors.gray};
	}

	> ${Flex} {
		a {
			font-size: ${rem(21)};
			color: ${theme.colors.gray};
			text-decoration: none;
		}
	}

	@media only screen and (min-width: ${breakpoints.laptop}) {
		display: none;
	}
`;

const MobileFooter = styled.div`
	margin-top: auto;
	margin-bottom: ${rem(20)};
`;

const LogoAnchor = styled.a`
	z-index: 1;
`;

export default function Nav() {
	const { pathname } = useRouter();
	const [isOpen, setIsOpen] = useState(false);

	function toggleMobileNav() {
		setIsOpen(!isOpen);
		const htmlEl = document.documentElement.classList;
		!isOpen ? htmlEl.add('is-locked') : htmlEl.remove('is-locked');
		document.body.style.overflowY = !isOpen ? 'hidden' : 'auto';
		document.body.style.height = !isOpen ? '100vh' : '0';
	}

	useEffect(() => {
		const htmlEl = document.documentElement.classList;
		return () => {
			htmlEl.remove('is-locked');
		};
	}, [isOpen]);

	function isSelected(str) {
		return pathname === str ? 'selected' : '';
	}
	return (
		<>
			<NavContainer>
				{isOpen && (
					<MobileNav>
						<Link href="/spaces" passHref>
							<a className={isSelected('/spaces')}>Spaces</a>
						</Link>
						<Link href="/expertise" passHref>
							<a className={isSelected('/expertise')}>Expertise</a>
						</Link>
						<Link href="/contact" passHref>
							<a className={isSelected('/contact')}>Contact</a>
						</Link>
						<Link href="/about" passHref>
							<a className={isSelected('/about')}>About</a>
						</Link>
						<Flex flexDirection="column" mt={rem(19)}>
							<Link href="/press" passHref>
								<a className={isSelected('/press')}>Press</a>
							</Link>
							<Link href="/blog" passHref>
								<a className={isSelected('/blog')}>Blog</a>
							</Link>
						</Flex>
						<MobileFooter>
							<Flex mb={rem(4)}>
								<Link href="/legal" passHref>
									<Text
										as="a"
										className={isSelected('/privacy')}
										variant="caption"
										fontWeight="bold"
										mr={rem(16)}
									>
										Privacy
									</Text>
								</Link>
								<Link href="/legal" passHref>
									<Text
										className={isSelected('/terms')}
										as="a"
										variant="caption"
										fontWeight="bold"
									>
										Terms
									</Text>
								</Link>
							</Flex>
							<Text variant="caption">Copyright © 2021 - NISHI design+studio</Text>
						</MobileFooter>
					</MobileNav>
				)}
				<Link href="/" passHref>
					<LogoAnchor>
						<Img isOpen={isOpen} src="/images/nishi-slate.png" alt="Black Logo" />
					</LogoAnchor>
				</Link>
				<DesktopNav>
					<Link href="/spaces" passHref>
						<Text className={isSelected('/spaces')} as="a" variant="action">
							Spaces
						</Text>
					</Link>
					<Link href="/expertise" passHref>
						<Text className={isSelected('/expertise')} as="a" variant="action">
							Expertise
						</Text>
					</Link>
					<Link href="/contact" passHref>
						<Text className={isSelected('/contact')} as="a" variant="action">
							Contact
						</Text>
					</Link>
					<Link href="/about" passHref>
						<Text className={isSelected('/about')} as="a" variant="action">
							About
						</Text>
					</Link>
				</DesktopNav>
				<HamburgerMenu toggleMobileNav={toggleMobileNav} isOpen={isOpen} />
			</NavContainer>
		</>
	);
}
