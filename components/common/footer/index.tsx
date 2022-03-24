import Link from 'next/link';
import Input from 'components/common/input';
import Text from 'components/common/text';
import { PrimaryButton } from 'components/common/button';
import styled from 'styled-components';
import theme from 'styles/theme';
import { breakpoints } from 'styles/media';
import { Flex } from 'rebass/styled-components';
import { rem } from 'polished';
import House from 'components/common/icons/house';
import Twitter from 'components/common/icons/twitter';
import Instagram from 'components/common/icons/instagram';
import LinkedIn from 'components/common/icons/linkedin';
import Facebook from 'components/common/icons/facebook';

const FullWidthContainer = styled.section<{ noPadding?: boolean }>`
	background-color: ${theme.colors.lightTan};
	padding-top: ${rem(56)};
	:before {
		content: '';
		display: block;
		width: 100vw;
		height: ${rem(39)};
		position: relative;
		left: 0;
		border-top: ${rem(1)} solid ${theme.colors.orange};
	}

	${({ noPadding }) => noPadding && `padding-top: 0;`};

	@media only screen and (min-width: ${breakpoints.laptop}) {
		padding-top: ${rem(89)};
		:before {
			height: ${rem(47)};
		}
		${({ noPadding }) => noPadding && `padding-top: 0;`};
	}
`;

const Footer = styled.footer`
	padding: 0 ${rem(27)} ${rem(20)} ${rem(27)};
	max-width: ${rem(1440)};
	margin: 0 auto;

	a {
		color: ${theme.colors.orange};
	}

	.logoImg {
		width: ${rem(92)};
		position: relative;
		top: ${rem(4)};
		@media only screen and (min-width: ${breakpoints.tablet}) {
			width: ${rem(100)};
		}
	}

	@media only screen and (min-width: ${breakpoints.laptop}) {
		padding: 0 ${rem(96)} ${rem(41)} ${rem(92)};
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	margin-bottom: ${rem(38)};
	input {
		margin-bottom: ${rem(10)};
	}

	@media only screen and (min-width: ${breakpoints.tablet}) {
		flex-direction: row;
		margin-bottom: 0;
		input {
			margin-bottom: 0;
			margin-right: ${rem(11)};
			width: ${rem(232)};
		}

		button {
			width: ${rem(139)};
		}
	}
`;

const NavContainer = styled.nav`
	width: ${rem(250)};
	margin-right: -${rem(45)};

	ul {
		columns: 2;
		list-style: none;
		padding: 0;
		margin: 0;
	}
`;

const NavItem = styled.a`
	color: ${theme.colors.orange};
	font-family: ${theme.typography.fonts.primary};
	font-size: ${rem(15)};
	line-height: ${rem(30)};
	font-weight: 500;
`;

const SocialFlex = styled(Flex)`
	align-items: center;

	a {
		padding: 0 ${rem(8)};

		:first-child {
			padding-left: 0;
		}
		:last-child {
			padding-right: 0;
		}
	}
`;

export default function FooterComponent({ noPadding }: { noPadding?: boolean }) {
	return (
		<FullWidthContainer noPadding={noPadding}>
			<Footer>
				<Flex
					flexDirection={['column', 'column', 'row']}
					mb={[rem(50), rem(50), null]}
					justifyContent="space-between"
					className="left-content"
				>
					<Flex flexDirection="column">
						<Text color={theme.colors.orange} mb={rem(23)} variant="highlight">
							NDS IN YOUR INBOX
						</Text>
						<Form>
							<Input placeholder="email address" />
							<PrimaryButton>submit</PrimaryButton>
						</Form>
					</Flex>
					<Flex flexDirection="column">
						<NavContainer>
							<ul>
								<li>
									<Link href="/spaces" passHref>
										<NavItem>/ spaces</NavItem>
									</Link>
								</li>
								<li>
									<Link href="/expertise" passHref>
										<NavItem>/ expertise</NavItem>
									</Link>
								</li>
								<li>
									<Link href="/about" passHref>
										<NavItem>/ about</NavItem>
									</Link>
								</li>
								<li>
									<Link href="/contact" passHref>
										<NavItem>/ contact</NavItem>
									</Link>
								</li>
								<li>
									<Link href="/blog" passHref>
										<NavItem>/ blog</NavItem>
									</Link>
								</li>
								<li>
									<Link href="/press" passHref>
										<NavItem>/ press</NavItem>
									</Link>
								</li>
							</ul>
						</NavContainer>
						<SocialFlex mt={[rem(44), rem(44), rem(60)]}>
							<Link href="https://www.houzz.in/hznb/professionals/interior-designers-and-decorators/nishi-design-studio-pfvwus-pf~974660898">
								<a>
									<House fill={theme.colors.orange} />
								</a>
							</Link>
							<Link href="https://twitter.com/nishidesignatl">
								<a>
									<Twitter fill={theme.colors.orange} />
								</a>
							</Link>
							<Link href="https://www.instagram.com/nishidesignstudio">
								<a>
									<Instagram fill={theme.colors.orange} />
								</a>
							</Link>
							<Link href="https://www.facebook.com/nishidesignstudio/">
								<a>
									<Facebook fill={theme.colors.orange} />
								</a>
							</Link>
							<Link href="https://www.linkedin.com/in/nishidonovan/">
								<a>
									<LinkedIn fill={theme.colors.orange} />
								</a>
							</Link>
						</SocialFlex>
					</Flex>
				</Flex>
				<Flex mb={rem(4)} alignItems="end" justifyContent="space-between">
					<Link href="/" passHref>
						<a>
							<img
								alt="LOGO NISHI design+studio"
								className="logoImg"
								src="/images/nishi-slate.png"
							/>
						</a>
					</Link>
					<Flex flexDirection="column" mt="auto">
						<Flex justifyContent="flex-end" mb={rem(4)}>
							<Link href="/legal" passHref>
								<Text
									as="a"
									variant={['actionMobile', 'actionMobile', 'action']}
									fontWeight="bold"
									mr={rem(16)}
									color={theme.colors.orange}
								>
									Privacy
								</Text>
							</Link>
							<Link href="/legal" passHref>
								<Text
									as="a"
									variant={['actionMobile', 'actionMobile', 'action']}
									fontWeight="bold"
									color={theme.colors.orange}
								>
									Terms
								</Text>
							</Link>
						</Flex>
						<Text
							variant={['captionMobile', 'captionMobile', 'caption']}
							textAlign="right"
						>
							Copyright © 2022 - NISHI design+studio
						</Text>
					</Flex>
				</Flex>
			</Footer>
		</FullWidthContainer>
	);
}
