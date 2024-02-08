import styled from "styled-components"
import { HomeButton } from "../atoms/buttons";
import { IMAGE_PATH } from "@/constants";
import { useRouter } from "next/router";

const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100vw;
  height: 90vh;
`;

export const HomeContainer = () => {
  const router = useRouter();

  const goToSetlist = () => {
    router.push("/setlist");
  }

  const goToReservation = () => {
    // router.push("/reservation");
    router.push("https://forms.gle/wtMYYFe9DTv9VYgj7")
  }

  const goToGuestBook = () => {
    router.push("https://padlet.com/2148010/11-2-hadtrc3otxzn9ss4");
  }
  return (
    <StyledHomeContainer>
      <HomeButton onClick={goToReservation} src={IMAGE_PATH.reservation} />
      <HomeButton onClick={goToSetlist} src={IMAGE_PATH.setlist} />
      <HomeButton onClick={goToGuestBook} src={IMAGE_PATH.guest_book} />
    </StyledHomeContainer>
  )
}