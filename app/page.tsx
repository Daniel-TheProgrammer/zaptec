"use client";

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
  JourneyConent,
  SplitText,
  InnerTextContainer,
} from "./styles";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [elementScrollTop, setElementScrollTop] = useState(0);
  const [isElementInView, setIsElementInView] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = (e: any) => {
      const position = window.scrollY;
      setScrollPosition(position);

      if (ref.current) {
        const elementTop = ref.current.offsetTop;
        setElementScrollTop(elementTop);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, elementScrollTop]);
  useEffect(() => {
    const element = ref.current;
    if (element) {
      const { top, bottom, height } = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      setIsElementInView(top < windowHeight - 100 && bottom > 0);
      const visibleHeight = Math.min(height, windowHeight - top);
      const totalHeight = element.scrollHeight;
      const percentage = (visibleHeight / totalHeight) * 100;
      setScrollPercentage(percentage);
    }
  }, [scrollPosition]);
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
          <InnerTextContainer ref={ref}>
            <Text percentage={scrollPercentage}>
              <SplitText>Fully</SplitText> <SplitText>charged</SplitText>{" "}
              <SplitText>for</SplitText> <SplitText>your</SplitText>
            </Text>
            <Text percentage={scrollPercentage}>
              <SplitText>next</SplitText> <SplitText>adventure</SplitText>
            </Text>

            <MediaWrapperCar>
              <Image
                src="/assets/zaptec-car (1).webp"
                alt=""
                width={0}
                height={0}
              />
            </MediaWrapperCar>
          </InnerTextContainer>
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
        </ModuleUpSection>
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
      </section>
    </>
  );
}
