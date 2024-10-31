import ChoosePlan from "@/components/Choose";
import Client from "@/components/Client";
import Customize from "@/components/Customize";
import Data from "@/components/Data";
import Extenstion from "@/components/Extenstion";
import Favorite from "@/components/Favorite";
import Hero from "@/components/Hero";
import ProjectManagment from "@/components/Project-Managment";
import Sponser from "@/components/Sponser";
import Work from "@/components/Work";

export default function Home() {
  return (
   <div>
     <Hero/>
     <ProjectManagment/>
     <Extenstion/>
     <Customize/>
     <ChoosePlan/>
     <Work/>
     <Data/>
     <Sponser/>
     <Favorite/>
     <Client/>
   </div>
  );
}
