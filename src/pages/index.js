import * as React from "react"
import Layout from "../Components/Layout/layout"
import FbaPrepSoftware from "../pageComponents/fbaPrepSoftware"
import Records from "../pageComponents/records"
import FeaturesTab from "../pageComponents/Features"
import ExploreContent from "../pageComponents/exploreFullSuite"
import EmbraceSection from "../pageComponents/embraceSection"
import TurnChallenges from "../pageComponents/turnChallenges"
import IntegrateWithECommerce from "../pageComponents/integrateWithECommerce"
import NoMoreDelays from "../pageComponents/noMoreDelays"
import AccordionSection from "../pageComponents/AccordionSection"
import Demo from "../pageComponents/bookADemo"

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
