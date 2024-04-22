import { PrimaryButton } from "components/common/button";
import Footer from "components/common/footer";
import Nav from "components/common/nav";
import Text from "components/common/text";
import Designers from "components/sections/designers";
import { GoogleFormSection } from "components/sections/form-section";
import { useStatus } from "components/sections/form-section/utils";
import SignupSection from "components/sections/signup-section";
import SocialSection from "components/sections/social-section";
import StartYourSpace from "components/sections/start-your-space";
import VendorsContractors from "components/sections/vendors-contractors";
import { useFormikContext } from "formik";
import { motion } from "framer-motion";
import { framerOptions } from "lib/framer";
import { ContactPageQuery } from "lib/urql/queries/pages";
import { initUrqlClient, withUrqlClient } from "next-urql";
import { rem } from "polished";
import { GoogleFormProvider, useGoogleForm } from "react-google-forms-hooks";
import { Box, Flex } from "rebass/styled-components";
import styled from "styled-components";
import { breakpoints } from "styles/media";
import theme from "styles/theme";
import {
  cacheExchange,
  dedupExchange,
  fetchExchange,
  ssrExchange,
  useQuery,
} from "urql";

import form from "lib/form.json";
import { useState } from "react";

const HeaderWrap = styled.div`
  background-color: ${theme.colors.lightTan};
`;

const PageBackground = styled.div`
  background-image: url("/images/contact-bg.png");
  background-size: contain;
`;

const PageContent = styled.div`
  max-width: ${rem(1123)};
  margin: 0 auto;
  padding: 0 ${rem(28)};

  ${PrimaryButton} {
    width: ${rem(274)};
  }

  .ty-text {
    margin-bottom: ${rem(62)};
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    .ty-text {
      font-size: ${rem(25)};
      line-height: ${rem(30)};
      letter-spacing: normal;
      max-width: ${rem(232)};
      margin-bottom: ${rem(15)};
    }
  }
`;

const ContactHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(4)} ${rem(28)} ${rem(28)} ${rem(28)};
  max-width: ${rem(1123)};
  margin: 0 auto;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-end;
    padding-bottom: ${rem(44)};
    margin-top: ${rem(49)};
  }
`;

const FormHeader = styled(Flex)`
  flex-direction: column;
  padding-top: ${rem(62)};
  margin-bottom: ${rem(103)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    margin-bottom: ${rem(52)};
  }
`;

const BottomLayout = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${theme.colors.lightTan};
`;

export const useGoogleFormHook = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // @ts-expect-error
  const methods = useGoogleForm({ form });

  const onSubmit = async (data) => {
    const completeData = {
      ...data,
      timestamp: new Date().toISOString(),
      score: "",
      email: data[48971740],
      call: "",
      secondaryEmal: data[1926078686],
    };

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/google-forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(completeData),
      });
      const res = await response.json();

      if (res?.data?.updates?.updatedRows === 1) {
        setShowSuccess(true);
        setShowError(false);
      }
    } catch (e) {
      console.error(e);
      setShowError(true);
    }

    setIsSubmitting(false);
  };

  return {
    methods,
    form,
    onSubmit,
    isSubmitting,
    showError,
    showSuccess,
  };
};

function ContactHeaderContainer({
  simplebannercontent:
    content = '<p><span style="font-weight: 400;">Introducing designers to the project before the walls start coming down or going up is crucial. Our process both informs and is informed by the architecture and construction of the space. Reach out sooner than you’d think!</span></p>\n',
  simplebannercontentsubtitle: contentSubtitle = "OUR INTAKE PROCESS",
  simplebannersubtitle: subtitle = "ready to begin a project?",
  simplebannertitle: title = "get in touch",
}) {
  return (
    <ContactHeader>
      <Flex mb={[rem(40), rem(40), "initial"]} flexDirection="column">
        <Text mb={rem(14)} variant="bodySmall" color={theme.colors.gray}>
          {subtitle}
        </Text>
        <Text variant="headingSmall" color={theme.colors.gray}>
          {title}
        </Text>
      </Flex>
      <Flex
        flexDirection="column"
        maxWidth={[rem(240), rem(240), "100%"]}
        width={[1 / 2]}
        ml="auto"
        textAlign="right"
      >
        <Text mb={rem(12)} variant="highlight">
          {contentSubtitle}
        </Text>
        <Text
          variant="bodySmall"
          color={theme.colors.black}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Flex>
    </ContactHeader>
  );
}

function FormHeaderContainer({
  titletwocolcontent:
    content = '<p><span style="font-weight: 400;">Our consultation consists of an in-space visit, comprehensive budget breakdown, and creative exploration in moodboards to begin realizing the space’s’ potential and setting expectations based on budget. </span></p>\n<p><b>* $800 consultation fee within 30 miles of Metro Atlanta. Outside this radius additional travel fees are required</b></p>\n',
  titletwocolsubtitle: subtitle = "THE CONSULTATION",
  titletwocoltitle: title = "start today",
}) {
  return (
    <FormHeader>
      <Box width={[1, 1, 1 / 2]} mb={[rem(35), rem(35), rem(40)]}>
        <Text variant={["headingMobile", "headingMobile", "heading"]}>
          {title}
        </Text>
      </Box>
      <Box width={[1, 1, 1 / 2]} mt={["initial", "initial", rem(16)]}>
        <Text variant="highlight" mb={[rem(16), rem(16), rem(24)]}>
          {subtitle}
        </Text>
        <Text
          variant="body"
          color="black"
          mb={[rem(24), rem(24)]}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <PrimaryButton
          mb={rem(24)}
          large
          onClick={() => {
            window.location.href =
              "https://nishidesignstudio.hbportal.co/public/discoveryform";
          }}
          type="submit"
        >
          Contact Form
        </PrimaryButton>
      </Box>
    </FormHeader>
  );
}

function ContactFormFooterContainer({
  contactbannertext:
    bannerText = "thank you for taking the time to fill this form out.",
  contactintrotext:
    introText = "If you have submitted the above form and feel confident that you’re ready to begin a project with Nishi Design + Studio, you can then book an intro call with Nishi.",
  showError,
  showSuccess,
  isSubmitting,
}) {
  return (
    <Flex flexDirection="column" textAlign="center" alignItems="center">
      {showError && (
        <Text
          variant="cardBody"
          mb={[rem(36)]}
          color="red"
          className="form-error form-error__submission"
        >
          Sorry. Please correct the errors above and re-submit your inquiry.
        </Text>
      )}
      <PrimaryButton
        mb={rem(62)}
        large
        onClick={() => {}}
        type="submit"
        disabled={isSubmitting || showSuccess}
      >
        {showSuccess
          ? "submitted"
          : isSubmitting
          ? "submitting..."
          : "submit form"}
      </PrimaryButton>
      {showSuccess && (
        <Text
          variant="cardBody"
          mb={[rem(36)]}
          maxWidth={rem(500)}
          color={theme.colors.orange}
        >
          Thank you for your contact submission. We will review your submission,
          and contact you shortly.
        </Text>
      )}
      <Text variant="heading" className="ty-text" pb={rem(62)}>
        {bannerText}
      </Text>
    </Flex>
  );
}

function Contact() {
  const [result] = useQuery({
    query: ContactPageQuery,
  });

  const {
    simpleBanner,
    contactFormFooter,
    titleTwoColumn,
    vendors,
    designers,
    startYourSpace,
    socialSection,
    newsletterSection,
  } = result?.data?.page;

  const { methods, onSubmit, isSubmitting, showSuccess, showError } =
    useGoogleFormHook();
  return (
    <motion.div {...framerOptions}>
      <HeaderWrap>
        <Nav />
        <ContactHeaderContainer {...simpleBanner} />
      </HeaderWrap>
      {/* <PageBackground> */}
      <PageContent>
        <GoogleFormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FormHeaderContainer {...titleTwoColumn} />
            {/* <GoogleFormSection />
              <ContactFormFooterContainer
                isSubmitting={isSubmitting}
                showSuccess={showSuccess}
                showError={showError}
              /> */}
          </form>
        </GoogleFormProvider>
      </PageContent>
      {/* </PageBackground> */}
      <BottomLayout>
        <SocialSection {...socialSection} />
      </BottomLayout>
      <VendorsContractors {...vendors} />
      <Designers {...designers} />
      <SignupSection {...newsletterSection} />
      <StartYourSpace {...startYourSpace} />
      <StartYourSpace {...startYourSpace} />
      <Footer />
    </motion.div>
  );
}

export async function getStaticProps() {
  const ssrCache = ssrExchange({ isClient: false });
  const client = initUrqlClient(
    {
      url: "https://live-nishi-design-studio.pantheonsite.io/graphql",
      exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
    },
    true
  );

  await client.query(ContactPageQuery).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
    revalidate: 30,
  };
}

export default withUrqlClient(
  (_) => ({
    url: "https://live-nishi-design-studio.pantheonsite.io/graphql",
  }),
  { ssr: false, staleWhileRevalidate: true } // Important so we don't wrap our component in getInitialProps
)(Contact);
