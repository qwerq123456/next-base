import { TeamSetlist } from "@/components/organisms/TeamSetlist";
import { SetlistTemplate } from "@/components/templates/setlistTemplate";

const SetList = () => {
  return (
    <SetlistTemplate>
      <TeamSetlist team="ob1" />
      <TeamSetlist team="ob2" />
      <TeamSetlist team="yb" />
    </SetlistTemplate>
  )
}

export default SetList;
