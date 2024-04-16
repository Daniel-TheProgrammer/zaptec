import Image from "next/image";
import styles from "./page.module.css";

import {
  SmoothContent,
  VideoWrapper,
  MediaWrapper,
  TitleContainer,
  TitleWrapper,
  Up1Section,
  InnerTextCenter,
  Text,
} from "./styles";


export default function Home() {
  return (
    <>
      <SmoothContent>
        <MediaWrapper>
          <VideoWrapper>
            <video
              className="exception-video object-cover"
              width="100%"
              height="100%"
              autoPlay
              loop
              playsInline
              preload="none"
              src="/assets/vid.mp4"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            ></video>
          </VideoWrapper>
        </MediaWrapper>
      </SmoothContent>
      <section>
        <Up1Section>
          <InnerTextCenter>
            <Text>
              <div>Fully charged for your</div>
              <div>next adventure</div>
            </Text>
          </InnerTextCenter>
        </Up1Section>
      </section>
    </>
  );
}
