import { styled } from "styled-components";
import Image from "next/image";
import { GlobalTemplate } from "@/components/templates/globalTemplate";

export const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
`;

interface HomeTemplateProps {
  children: React.ReactNode;
}

const BackgroundImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
`;
export const HomeTemplate = ({ children }: HomeTemplateProps) => {
  return (
    <GlobalTemplate>
      <HomeLayout>
        <BackgroundImage
          src="/background.png"
          alt="poster"
          width={300}
          height={400}
          priority
        />
        {children}
      </HomeLayout>
    </GlobalTemplate>
  )
}