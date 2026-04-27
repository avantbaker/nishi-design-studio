import Image from 'next/image';
import { rem } from 'polished';
import styled, { keyframes } from 'styled-components';
import theme from 'styles/theme';

const HONEYBOOK_URL = 'https://nishidesignstudio.hbportal.co/public/discoveryform';
const CONTACT_EMAIL = 'interiors@nishidesignstudio.com';
const INSTAGRAM_URL = 'https://www.instagram.com/nishidesignstudio';

const fadeUp = keyframes`
	from {
		opacity: 0;
		transform: translate3d(0, 14px, 0);
	}
	to {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
`;

const fadeIn = keyframes`
	from { opacity: 0; }
	to { opacity: 1; }
`;

const imageReveal = keyframes`
	from {
		opacity: 0;
		transform: scale(1.04);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
`;

const Page = styled.main`
	min-height: 100vh;
	background: ${theme.colors.lightTan};
	color: ${theme.colors.black};
	display: flex;
	flex-direction: column;
	position: relative;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: radial-gradient(${theme.colors.sand} 0.6px, transparent 0.6px);
		background-size: 22px 22px;
		opacity: 0.18;
		pointer-events: none;
		mix-blend-mode: multiply;
	}
`;

const TopBar = styled.header`
	position: relative;
	z-index: 2;
	display: grid;
	grid-template-columns: minmax(0, 1fr) minmax(0, auto);
	align-items: center;
	gap: ${rem(16)};
	padding: ${rem(20)} ${rem(20)};
	animation: ${fadeIn} 0.9s ease-out both;

	@media (min-width: 560px) {
		gap: ${rem(20)};
		padding: ${rem(24)} ${rem(28)};
	}

	@media (min-width: 900px) {
		gap: ${rem(24)};
		padding: ${rem(32)} ${rem(48)};
	}

	@media (min-width: 1280px) {
		padding: ${rem(36)} ${rem(56)};
	}
`;

const Eyebrow = styled.span`
	font-family: ${theme.typography.fonts.primary};
	font-weight: 600;
	font-size: ${rem(10)};
	letter-spacing: 0.18em;
	text-transform: uppercase;
	color: ${theme.colors.green};
	white-space: nowrap;

	@media (min-width: 560px) {
		font-size: ${rem(11)};
		letter-spacing: 0.2em;
	}

	@media (min-width: 900px) {
		font-size: ${rem(12)};
		letter-spacing: 0.22em;
	}
`;

const TopBarRight = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: ${rem(12)};
	color: ${theme.colors.gray};
	min-width: 0;

	@media (min-width: 560px) {
		gap: ${rem(14)};
	}
`;

const TopMark = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: flex-start;
`;

const TopMarkImg = styled.img`
	display: block;
	width: auto;
	height: ${rem(48)};

	@media (min-width: 560px) {
		height: ${rem(55)};
	}

	@media (min-width: 900px) {
		height: ${rem(62)};
	}

	@media (min-width: 1280px) {
		height: ${rem(76)};
	}
`;

const EyebrowFull = styled.span`
	display: none;

	@media (min-width: 560px) {
		display: inline;
	}
`;

const EyebrowShort = styled.span`
	display: inline;

	@media (min-width: 560px) {
		display: none;
	}
`;

const TopBarCenter = styled.div`
	display: none;

	@media (min-width: 900px) {
		display: flex;
		align-items: center;
		gap: ${rem(14)};
		color: ${theme.colors.gray};
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		pointer-events: none;
	}
`;

const Dot = styled.span`
	display: inline-block;
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background: ${theme.colors.orange};
	box-shadow: 0 0 0 4px rgba(215, 139, 50, 0.18);
`;

const Layout = styled.section`
	flex: 1;
	display: grid;
	grid-template-columns: 1fr;
	gap: ${rem(48)};
	padding: ${rem(24)} ${rem(32)} ${rem(56)};
	position: relative;
	z-index: 1;

	&::before {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 28%;
		height: ${rem(140)};
		background-image: url('/elements/goldlines/Gold-Line-4.png');
		background-repeat: no-repeat;
		background-position: left center;
		background-size: auto 100%;
		opacity: 0.45;
		pointer-events: none;
		z-index: 0;
		transform: rotate(-2deg);
		transform-origin: left center;
		mix-blend-mode: multiply;
	}

	& > * {
		position: relative;
		z-index: 1;
	}

	@media (min-width: 900px) {
		grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.15fr);
		gap: ${rem(72)};
		padding: ${rem(36)} ${rem(56)} ${rem(72)};
		align-items: stretch;

		&::before {
			top: 50%;
			height: ${rem(220)};
			transform: translateY(-50%) rotate(-3deg);
			transform-origin: left center;
			opacity: 0.5;
		}
	}

	@media (min-width: 1280px) {
		grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.25fr);
		padding: ${rem(48)} ${rem(80)} ${rem(96)};
		gap: ${rem(96)};

		&::before {
			height: ${rem(280)};
		}
	}
`;

const TextColumn = styled.div`
	display: flex;
	flex-direction: column;
	max-width: ${rem(560)};

	& > * {
		opacity: 0;
		animation: ${fadeUp} 0.9s ease-out forwards;
	}
	& > *:nth-child(1) {
		animation-delay: 0.05s;
	}
	& > *:nth-child(2) {
		animation-delay: 0.18s;
	}
	& > *:nth-child(3) {
		animation-delay: 0.32s;
	}
	& > *:nth-child(4) {
		animation-delay: 0.46s;
	}
	& > *:nth-child(5) {
		animation-delay: 0.6s;
	}
	& > *:nth-child(6) {
		animation-delay: 0.74s;
	}
`;

const SectionLabel = styled.div`
	display: flex;
	align-items: center;
	gap: ${rem(12)};
	font-family: ${theme.typography.fonts.primary};
	font-weight: 600;
	font-size: ${rem(11)};
	letter-spacing: 0.28em;
	text-transform: uppercase;
	color: ${theme.colors.orange};
	margin-bottom: ${rem(28)};

	&::before {
		content: '';
		display: inline-block;
		width: ${rem(36)};
		height: 1px;
		background: ${theme.colors.orange};
	}
`;

const Display = styled.h1`
	font-family: ${theme.typography.fonts.secondary};
	font-weight: 400;
	font-style: italic;
	color: ${theme.colors.black};
	font-size: clamp(${rem(44)}, 7vw, ${rem(96)});
	line-height: 0.98;
	letter-spacing: -0.015em;
	margin: 0 0 ${rem(28)};

	em {
		font-style: italic;
		color: ${theme.colors.orange};
	}
`;

const Rule = styled.span`
	display: block;
	height: 1px;
	width: ${rem(56)};
	background: ${theme.colors.black};
	margin: 0 0 ${rem(28)};
	transform-origin: left center;
	animation-name: ${fadeIn} !important;
`;

const Body = styled.p`
	font-family: ${theme.typography.fonts.secondary};
	font-weight: 400;
	font-size: ${rem(17)};
	line-height: 1.6;
	color: ${theme.colors.brown};
	margin: 0 0 ${rem(36)};
	max-width: ${rem(460)};

	@media (min-width: 768px) {
		font-size: ${rem(18)};
	}
`;

const Actions = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: ${rem(20)};
	margin-bottom: ${rem(48)};
`;

const PrimaryAction = styled.a`
	display: inline-flex;
	align-items: center;
	gap: ${rem(14)};
	padding: ${rem(16)} ${rem(26)};
	background: ${theme.colors.black};
	color: ${theme.colors.lightTan};
	font-family: ${theme.typography.fonts.primary};
	font-weight: 600;
	font-size: ${rem(12)};
	letter-spacing: 0.2em;
	text-transform: uppercase;
	border-radius: 999px;
	transition:
		background 0.4s ease,
		transform 0.4s ease,
		color 0.4s ease;

	span.arrow {
		display: inline-block;
		transition: transform 0.4s ease;
	}

	&:hover {
		background: ${theme.colors.green};
		color: ${theme.colors.tan};
		span.arrow {
			transform: translateX(4px);
		}
	}
`;

const SecondaryAction = styled.a`
	font-family: ${theme.typography.fonts.secondary};
	font-style: italic;
	font-size: ${rem(17)};
	color: ${theme.colors.black};
	border-bottom: 1px solid ${theme.colors.orange};
	padding-bottom: ${rem(2)};
	transition:
		color 0.3s ease,
		border-color 0.3s ease;

	&:hover {
		color: ${theme.colors.orange};
		border-color: ${theme.colors.black};
	}
`;

const StudioNote = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: ${rem(48)};
	padding-top: ${rem(28)};
	border-top: 1px solid rgba(37, 37, 37, 0.14);
	max-width: ${rem(440)};
`;

const StudioNoteLabel = styled.div`
	font-family: ${theme.typography.fonts.primary};
	font-weight: 600;
	font-size: ${rem(10)};
	letter-spacing: 0.24em;
	text-transform: uppercase;
	color: ${theme.colors.gray};
`;

const StudioNoteValue = styled.div`
	font-family: ${theme.typography.fonts.secondary};
	font-size: ${rem(14)};
	color: ${theme.colors.black};
	line-height: 1.55;

	a {
		border-bottom: 1px solid rgba(37, 37, 37, 0.3);
		transition: border-color 0.3s ease;
	}
	a:hover {
		border-color: ${theme.colors.orange};
	}
`;

const ImageColumn = styled.div`
	position: relative;
	width: 100%;
	opacity: 0;
	animation: ${imageReveal} 1.2s cubic-bezier(0.2, 0.7, 0.2, 1) 0.35s forwards;

	@media (min-width: 900px) {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
`;

const ImageFrame = styled.figure`
	position: relative;
	margin: 0;
	background: ${theme.colors.tan};
	overflow: hidden;
	width: 100%;
	padding-top: 125%;
	box-shadow: 0 30px 60px -40px rgba(37, 37, 37, 0.45);

	@media (min-width: 900px) {
		padding-top: 0;
		flex: 1;
		min-height: 0;
	}
`;

const ImageInner = styled.div`
	position: absolute;
	inset: 0;
	transition: transform 1.4s ease;

	&::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(50, 46, 46, 0.25), rgba(50, 46, 46, 0) 45%);
		pointer-events: none;
	}

	${ImageFrame}:hover & {
		transform: scale(1.03);
	}
`;

const ImageBadge = styled.div`
	position: absolute;
	top: ${rem(20)};
	left: ${rem(20)};
	z-index: 2;
	display: inline-flex;
	align-items: center;
	gap: ${rem(10)};
	padding: ${rem(8)} ${rem(14)};
	background: rgba(251, 249, 242, 0.92);
	backdrop-filter: blur(6px);
	font-family: ${theme.typography.fonts.primary};
	font-weight: 600;
	font-size: ${rem(10)};
	letter-spacing: 0.22em;
	text-transform: uppercase;
	color: ${theme.colors.green};
	border-radius: 999px;
`;

const ImageCaption = styled.figcaption`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	gap: ${rem(16)};
	margin-top: ${rem(18)};
	padding-top: ${rem(14)};
	border-top: 1px solid rgba(37, 37, 37, 0.18);
	font-family: ${theme.typography.fonts.primary};
	font-size: ${rem(11)};
	letter-spacing: 0.18em;
	text-transform: uppercase;
	color: ${theme.colors.gray};

	em {
		font-family: ${theme.typography.fonts.secondary};
		font-style: italic;
		text-transform: none;
		letter-spacing: 0;
		font-size: ${rem(13)};
		color: ${theme.colors.black};
	}
`;

const FloatingMark = styled.div`
	position: absolute;
	right: ${rem(-28)};
	bottom: ${rem(-28)};
	width: ${rem(124)};
	height: ${rem(124)};
	border-radius: 50%;
	background: ${theme.colors.orange};
	color: ${theme.colors.lightTan};
	display: none;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: ${rem(4)};
	text-align: center;
	padding: ${rem(14)};
	box-shadow: 0 16px 32px -16px rgba(215, 139, 50, 0.6);
	z-index: 3;
	transform: rotate(-6deg);
	transition: transform 0.6s ease;

	&:hover {
		transform: rotate(0deg) scale(1.04);
	}

	@media (min-width: 900px) {
		display: flex;
	}
`;

const FloatingMarkScript = styled.span`
	font-family: ${theme.typography.fonts.secondary};
	font-style: italic;
	font-size: ${rem(17)};
	line-height: 1;
`;

const FloatingMarkLabel = styled.span`
	font-family: ${theme.typography.fonts.primary};
	font-weight: 600;
	font-size: ${rem(9)};
	letter-spacing: 0.28em;
	text-transform: uppercase;
`;

const Footer = styled.footer`
	position: relative;
	z-index: 2;
	display: flex;
	flex-direction: column-reverse;
	align-items: flex-start;
	gap: ${rem(28)};
	padding: ${rem(24)} ${rem(32)};
	border-top: 1px solid rgba(37, 37, 37, 0.12);
	font-family: ${theme.typography.fonts.primary};
	font-size: ${rem(11)};
	letter-spacing: 0.18em;
	text-transform: uppercase;
	color: ${theme.colors.gray};
	animation: ${fadeIn} 1.2s ease-out 0.6s both;

	@media (min-width: 768px) {
		display: grid;
		flex-direction: row;
		grid-template-columns: 1fr auto;
		padding: ${rem(28)} ${rem(56)};
		align-items: center;
	}
`;

const FooterRight = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: ${rem(20)};
	align-self: flex-end;

	@media (min-width: 768px) {
		align-self: auto;
	}
`;

const FooterLink = styled.a`
	color: ${theme.colors.orange};
	transition: color 0.3s ease;
	&:hover {
		color: ${theme.colors.black};
	}
`;

function Home() {
	return (
		<Page>
			<TopBar>
				<TopMark>
					<TopMarkImg
						src="/logos/black/NDS-Logo-Black.png"
						alt="Nishi Design + Studio"
					/>
				</TopMark>
				<TopBarCenter>
					<Eyebrow>Atlanta · Georgia</Eyebrow>
				</TopBarCenter>
				<TopBarRight>
					<Dot />
					<Eyebrow>
						<EyebrowFull>Studio Update — 2026</EyebrowFull>
						<EyebrowShort>2026</EyebrowShort>
					</Eyebrow>
				</TopBarRight>
			</TopBar>

			<Layout>
				<TextColumn>
					<SectionLabel>Under Construction</SectionLabel>
					<Display>
						A new chapter <em>is being</em> written.
					</Display>
					<Rule />
					<Body>
						Our digital home is being thoughtfully redrawn — line by line, room by room —
						to better reflect the work we do. While the new pages are being composed, the
						studio remains very much open. We&rsquo;d love to hear about the space
						you&rsquo;re dreaming into being.
					</Body>
					<Actions>
						<PrimaryAction href={HONEYBOOK_URL} target="_blank" rel="noreferrer">
							Begin a Project <span className="arrow">→</span>
						</PrimaryAction>
						<SecondaryAction href={`mailto:${CONTACT_EMAIL}`}>
							{CONTACT_EMAIL}
						</SecondaryAction>
					</Actions>
					<StudioNote>
						<StudioNoteLabel>
							In the
							<br />
							Meantime
						</StudioNoteLabel>
						<StudioNoteValue>
							Wander through our archive on{' '}
							<a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
								Instagram
							</a>
							, or send a note for press, partnership and trade inquiries to{' '}
							<a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
						</StudioNoteValue>
					</StudioNote>
				</TextColumn>

				<ImageColumn>
					<ImageFrame>
						<ImageBadge>
							<Dot /> From the Archive
						</ImageBadge>
						<ImageInner>
							<Image
								src="/under-construction-archive.png"
								alt="A Nishi Design + Studio interior, from the archive"
								layout="fill"
								objectFit="cover"
								priority
							/>
						</ImageInner>
						<FloatingMark>
							<FloatingMarkScript>Decisively</FloatingMarkScript>
							<FloatingMarkLabel>Different</FloatingMarkLabel>
						</FloatingMark>
					</ImageFrame>
					<ImageCaption>
						<em>Something serene + imaginative</em>
						<span>Atl · &lsquo;26</span>
					</ImageCaption>
				</ImageColumn>
			</Layout>

			<Footer>
				<div>© Nishi Design + Studio</div>
				<FooterRight>
					<FooterLink
						href={INSTAGRAM_URL}
						target="_blank"
						rel="noreferrer"
						style={{ fontWeight: 700 }}
					>
						Instagram
					</FooterLink>
					<FooterLink href={`mailto:${CONTACT_EMAIL}`} style={{ fontWeight: 700 }}>
						Email
					</FooterLink>
				</FooterRight>
			</Footer>
		</Page>
	);
}

export default Home;
