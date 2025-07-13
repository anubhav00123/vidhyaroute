import BreadcrumbBanner from "@/components/BreadCrumbBanner";
import KeyResponsibility from "@/components/KeyResponsibility";
import Navbar from "@/components/Navbar";
import SkillProgress from "@/components/SkillProgress";
import TeamMemberCard from "@/components/TeamMemberCard";
import Footer from "@/components/ui/Footer";
import React from "react";

const TeamDetails = () => {
  return (
    <>
      <Navbar />
      <BreadcrumbBanner title="Team Details" />
      <div className="container">
        <TeamMemberCard />
        <h2 className="text-blue">Biography</h2>
        <p className="text-muted">
          Praesent id ante sit amet neque blandituni posuere vitae id ipsum.
          Proin rutrum est enim, vel aliquam sapien vulputate sit amet.art
          Integer sit amet finibus ex, nec mattis felis. In volutpat rutrum
          pellentesque. Maecenas ut orci pulvinar, malesuada ligula ac,
          facilisis eros. Aenean bibendum ac urna non pellentesque. Duis
          consectetur tellus odio, ut rhoncus dolor maximus sit amet. Vestibulum
          aliquam euismod tellus sit amet faucibus. Aliquam euismod tincidunt
          lectus sit amet rhoncus.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis et enim justo, in mauris posuere dolor. Dolor
          felis sapien sit egestas. Ut venenatis faucibus non sed faucibus
          mauris ultricies. Cras varius proin amet vehicula magna. Ultricies
          gravida vel volutpat sed. Platea sed fames at egestas amet feugiat
          laoreet potenti integer. Viverra at maecenas convallis condimentum
          egestas nunc sagittis eu. Semper faucibus facilisis vitae
          sollicitudin. Fringilla mauris magna sit elementum elit. Facilisi
          lacus, pharetra quam eu urna amet aenean. Nunc mattis vitae tellus
          bibendum a eu, nunc. Consequat commodo ac cursus in donec orci tempus.
          Massa sed sit faucibus neque ac. Nibh nisl nisl id fermentum habitant
          consequat. A ornare in dis sit cras natoque morbi. Phasellus senectus
          tortor sed magnis. Egestas nunc pellentesque egestas gravida amet.
        </p>
        <div className="row">
          <div className="col-md-6">
            <SkillProgress />
          </div>
          <div className="col-md-6">
            <KeyResponsibility />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default TeamDetails;
