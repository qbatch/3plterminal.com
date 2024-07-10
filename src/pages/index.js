import React, { lazy } from "react"

const FbaPrepSoftware = lazy(() => import("../pageComponents/fbaPrepSoftware"));
const Records = lazy(() => import("../pageComponents/records"));
const FeaturesTab = lazy(() => import("../pageComponents/Features"));
const ExploreContent = lazy(() => import("../pageComponents/exploreFullSuite"));
const EmbraceSection = lazy(() => import("../pageComponents/embraceSection"));
const TurnChallenges = lazy(() => import("../pageComponents/turnChallenges"));
const IntegrateWithECommerce = lazy(() => import("../pageComponents/integrateWithECommerce"));
const NoMoreDelays = lazy(() => import("../pageComponents/noMoreDelays"));
const AccordionSection = lazy(() => import("../pageComponents/AccordionSection"));
const Demo = lazy(() => import("../pageComponents/bookADemo"));
const Layout = lazy(() => import("../Components/Layout/layout"));

const IndexPage = () => {
  return (
<Layout>
  <FbaPrepSoftware/>
  <Records />
  <FeaturesTab />
  <ExploreContent />
  <EmbraceSection />
  <TurnChallenges />
  <IntegrateWithECommerce />
  <NoMoreDelays />
  <AccordionSection />
  <Demo />
</Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
