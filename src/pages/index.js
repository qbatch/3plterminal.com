import React, { lazy, Suspense } from "react"
import { SEO } from "../seo/seo";

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
    <Suspense fallback={null}>
      <Layout>
        <FbaPrepSoftware />
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
    </Suspense>
  )
}

export default IndexPage

export const Head = () => (
  <SEO title="Best Automation Software for Prep Centers | 3PL Terminal" description="3PL Terminal is the top software for prep centers to streamline your FBA and FBM operations. Optimize inventory for Amazon sellers and enhance efficiency.">
    <script type="application/ld+json">{JSON.stringify({})}</script>
  </SEO>
)

