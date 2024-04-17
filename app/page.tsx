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
  MediaWrapperCar,
  Up2Section,
  InnerDesktop,
  BlockContentWrapper,
  BlockMediaWrapper,
  BlockImageInnerWrapper,
  BlockImageWrapper,
  Up3Section,
  Up3SectionContainer,
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
            <MediaWrapperCar>
              <Image
                src="/assets/zaptec-car (1).webp"
                alt=""
                width={0}
                height={0}
              />
            </MediaWrapperCar>
          </InnerTextCenter>
        </Up1Section>
        <Up2Section>
          <InnerDesktop>
            <BlockContentWrapper></BlockContentWrapper>
            <BlockMediaWrapper>
              <BlockImageWrapper>
                <BlockImageInnerWrapper>
                  <Image
                    src="/assets/home-charging.webp"
                    alt=""
                    width={0}
                    height={0}
                    style={{
                      maxHeight: "clamp(81rem, 100vw, 112.5rem)",
                      objectFit: "cover",
                      height: "100%",
                      maxWidth: "100%",
                      width: "100%",
                    }}
                  />
                </BlockImageInnerWrapper>
              </BlockImageWrapper>
              <BlockImageWrapper>
                <BlockImageInnerWrapper>
                  <Image
                    src="/assets/Zaptec2_6.webp"
                    alt=""
                    width={0}
                    height={0}
                    style={{
                      maxHeight: "clamp(81rem, 100vw, 112.5rem)",
                      objectFit: "cover",
                      height: "100%",
                      maxWidth: "100%",
                      width: "100%",
                    }}
                  />
                </BlockImageInnerWrapper>
              </BlockImageWrapper>
            </BlockMediaWrapper>
          </InnerDesktop>
        </Up2Section>
        <Up3Section>
          <Up3SectionContainer>
            <h2>
              <div>Explore</div>
              <div>our charges</div>
            </h2>
          </Up3SectionContainer>
        </Up3Section>
      </section>
    </>
  );
}
