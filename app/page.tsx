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
  InfoModuleUp,
  InfoModuleUpDiv,
  ModuleUpSection,
  Swiper,
  SwipperWrapper,
  SwipperSlide,
  MediaWrapperCard,
  CardContent,
  JourneySection,
  PinSpace,
  JourneySectionInnerWrapper,
  JourneyConent
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
        <ModuleUpSection>
          <InfoModuleUp>
            <InfoModuleUpDiv>
              <h2>Info hub</h2>
            </InfoModuleUpDiv>
            <Swiper>
              <SwipperWrapper>
                <SwipperSlide>
                  <a>
                    <div>
                      <MediaWrapperCard>
                        <Image
                          src=""
                          alt=""
                          style={{
                            width: "100%",
                            height: "283px",
                          }}
                        />
                      </MediaWrapperCard>
                      <CardContent>
                        <div>
                          <span>Inside zaptec</span>
                        </div>
                        <h3>
                          He{"'"}s done it twice before. Now, the new CEO aims
                          to repeat the success with Zaptec.
                        </h3>
                      </CardContent>
                    </div>
                  </a>
                </SwipperSlide>
                <SwipperSlide>
                  <a>
                    <div>
                      <MediaWrapperCard>
                        <Image
                          src=""
                          alt=""
                          style={{
                            width: "100%",
                            height: "563px",
                          }}
                        />
                      </MediaWrapperCard>
                      <CardContent>
                        <div>
                          <span>Industrial news</span>
                        </div>
                        <h3>
                          Quality alliance of the electrical trades in Germany:
                          Zaptec becomes an e-brand partner of the ZVEH
                        </h3>
                      </CardContent>
                    </div>
                  </a>
                </SwipperSlide>
                <SwipperSlide>
                  <a>
                    <div>
                      <MediaWrapperCard>
                        <Image
                          src=""
                          alt=""
                          style={{
                            width: "100%",
                            height: "413px",
                          }}
                        />
                      </MediaWrapperCard>
                      <CardContent>
                        <div>
                          <span>Inside Zaptec</span>
                        </div>
                        <h3>
                          Annual Report and Sustainability Report for 2023
                        </h3>
                      </CardContent>
                    </div>
                  </a>
                </SwipperSlide>
              </SwipperWrapper>
            </Swiper>
          </InfoModuleUp>
          <InfoModuleUp>
            <Swiper>
              <SwipperWrapper>
                <div></div>
                <div></div>
                <div></div>
              </SwipperWrapper>
            </Swiper>
          </InfoModuleUp>
          <JourneySection>
            <PinSpace>
              <JourneySectionInnerWrapper>
                <JourneyConent>
                  <h2>
                    <div>A product of the rugged </div>
                    <div>Norwegian west coast</div>
                  </h2>
                </JourneyConent>
              </JourneySectionInnerWrapper>
            </PinSpace>
          </JourneySection>
        </ModuleUpSection>
      </section>
    </>
  );
}
