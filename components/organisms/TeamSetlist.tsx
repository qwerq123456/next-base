import styled from "styled-components";
import { Toggle } from "../molecules/toggle";
import { SetlistTeamTitle } from "../atoms/texts";
import { useRouter } from "next/router";

interface TeamSetlistObjectType {
  title: string;
  setlist: string;
  playlist_link: string;
}
type TeamType = "ob1" | "ob2" | "yb";

type ObjType = {
  [key in TeamType]: TeamSetlistObjectType;
}
const IMAGE_PATH = {
  "ob1": {
    title: "assets/texts/ob_team1.png",
    setlist: "assets/texts/setlist_text_ob_1.png",
    playlist_link: "assets/texts/playlist_link_ob_1.png",
    youtube_link: "https://youtube.com/playlist?list=PLK-6sIB0foEKKqeCV0A_nCsuJB-s_o-qI&si=XNY96_mTyhcYFcLZ"
  },
  "ob2": {
    title: "assets/texts/ob_team2.png",
    setlist: "assets/texts/setlist_text_ob_2.png",
    playlist_link: "assets/texts/playlist_link_ob_2.png",
    youtube_link: "https://youtube.com/playlist?list=PLK-6sIB0foEJPCsRZLigPtHOa0FUC2ZEX&si=c_hWAvnXocQ4eb6z"
  },
  "yb": {
    title: "assets/texts/yb_team.png",
    setlist: "assets/texts/setlist_text_yb.png",
    playlist_link: "assets/texts/playlist_link_yb.png",
    youtube_link: "https://youtube.com/playlist?list=PLK-6sIB0foEJcJRkIkczJ5C6L8e7eCktB&si=LbuFrS5rFLJvrrjj"
  },
}

const setlist_fold = "assets/texts/setlist_fold.png";
const setlist_unfold = "assets/texts/setlist_unfold.png";
const playlist_fold = "assets/texts/playlist_fold.png";
const playlist_unfold = "assets/texts/playlist_unfold.png";

const StyledTeamSetlist = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  padding-bottom: 5vh;
`

interface TeamSetlistProps {
  team: "ob1" | "ob2" | "yb";
}

export const TeamSetlist = ({ team }: TeamSetlistProps) => {

  const router = useRouter();

  const goToPlaylist = () => {
    router.push(IMAGE_PATH[team].youtube_link);
  }
  const setListToggleProps = {
    title_fold: setlist_fold,
    title_unfold: setlist_unfold,
    content: IMAGE_PATH[team].setlist,
    onClickContent: () => { },
  }
  const playlistToggleProps = {
    title_fold: playlist_fold,
    title_unfold: playlist_unfold,
    content: IMAGE_PATH[team].playlist_link,
    onClickContent: goToPlaylist
  }
  return (
    <StyledTeamSetlist>
      <SetlistTeamTitle src={IMAGE_PATH[team].title} />
      <Toggle {...setListToggleProps} />
      <Toggle {...playlistToggleProps} />
    </StyledTeamSetlist>
  )
}