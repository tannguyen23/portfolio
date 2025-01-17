import SnowfallBG from "../../components/layouts/SnowfallBG";
import ToggleButton from "../../components/layouts/ToggleButton";
import { useDarkMode } from "../../hooks/useDarkMode";
import Timeline from "./timeline";
import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import MeContainer from "./me";
import MyStackContainer from "./my-stack";
import Projects from "./projects";

export default function Portfolio() {
    const parallax = useRef(null);

    const [isDarkMode, setIsDarkMode] = useDarkMode();

    const url = (name, wrap = false) =>
        `${
            wrap ? "url(" : ""
        }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
            wrap ? ")" : ""
        }`;

    const handleScroll = (page) => {
        return;
        // eslint-disable-next-line no-unreachable
        parallax.current.scrollTo(page);
    };

    return (
        <div className="container overflow-hidden">
            <SnowfallBG snowColor={isDarkMode ? "#ffffff" : "#577BC1"} />
            <div className="absolute right-1 m-2 mx-4 z-50">
                <ToggleButton
                    isDarkMode={isDarkMode}
                    onSetIsDarkMode={setIsDarkMode}
                />
            </div>
            <div className="flex flex-col gap-4">
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        background: "#253237",
                    }}
                >
                    <Parallax ref={parallax} pages={4}>
                        <ParallaxLayer
                            offset={0}
                            speed={0.1}
                            style={{
                                display: "flex",
                                alignItems: "start",
                                justifyContent: "center",
                            }}
                        >
                            <img
                                src={"/undraw_outer-space_qey5.svg"}
                                style={{ width: "10%" }}
                            />
                        </ParallaxLayer>

                        <ParallaxLayer
                            onClick={() => handleScroll(1)}
                            offset={0}
                            speed={0}
                            factor={1}
                            style={{
                                backgroundImage: url("stars", true),
                                backgroundSize: "cover",
                            }}
                        >
                            <MeContainer />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={1}
                            speed={1}
                            style={{ backgroundColor: "#805E73", opacity: 0.2 }}
                        />

                        <ParallaxLayer
                            offset={1}
                            speed={0.2}
                            style={{ opacity: 0.2 }}
                        >
                            <img
                                src={url("cloud")}
                                style={{
                                    display: "block",
                                    width: "10%",
                                    marginLeft: "10%",
                                }}
                            />
                            <img
                                src={url("cloud")}
                                style={{
                                    display: "block",
                                    width: "20%",
                                    marginLeft: "75%",
                                }}
                            />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={1}
                            speed={0.8}
                            style={{ opacity: 0.1 }}
                        >
                            <img
                                src={url("cloud")}
                                style={{
                                    display: "block",
                                    width: "20%",
                                    marginLeft: "55%",
                                }}
                            />
                            <img
                                src={url("cloud")}
                                style={{
                                    display: "block",
                                    width: "10%",
                                    marginLeft: "15%",
                                }}
                            />
                        </ParallaxLayer>

                        <ParallaxLayer
                            onClick={() => handleScroll(2)}
                            offset={1}
                            speed={0.9}
                            style={{
                                backgroundImage: url("stars", true),
                                backgroundSize: "cover",
                                zIndex: 100,
                            }}
                        >
                            <Timeline />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={1.3}
                            speed={-0.3}
                            style={{ pointerEvents: "none", zIndex: 0 }}
                        >
                            <img
                                src={url("satellite4")}
                                style={{
                                    width: "15%",
                                    marginRight: "0%",
                                    opacity: 0.4,
                                }}
                            />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={1.75}
                            speed={0.5}
                            style={{ opacity: 0.1 }}
                        >
                            <img
                                src={url("cloud")}
                                style={{
                                    display: "block",
                                    width: "20%",
                                    marginLeft: "70%",
                                }}
                            />
                            <img
                                src={url("cloud")}
                                style={{
                                    display: "block",
                                    width: "20%",
                                    marginLeft: "40%",
                                }}
                            />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={2}
                            speed={1}
                            style={{ backgroundColor: "#87BCDE", opacity: 0.2 }}
                        />

                        <ParallaxLayer
                            onClick={() => handleScroll(3)}
                            offset={2}
                            speed={0}
                            factor={1}
                            style={{
                                backgroundImage: url("stars", true),
                                backgroundSize: "cover",
                                zIndex: 50,
                            }}
                        >
                            <MyStackContainer />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={1.6}
                            speed={-0.1}
                            style={{ opacity: 0.2 }}
                        >
                            <img
                                src={url("cloud")}
                                style={{
                                    display: "block",
                                    width: "20%",
                                    marginLeft: "60%",
                                }}
                            />
                            <img
                                src={url("cloud")}
                                style={{
                                    display: "block",
                                    width: "25%",
                                    marginLeft: "30%",
                                }}
                            />
                            <img
                                src={url("cloud")}
                                style={{
                                    display: "block",
                                    width: "10%",
                                    marginLeft: "80%",
                                }}
                            />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={2.6}
                            speed={0.4}
                            style={{ opacity: 0.2 }}
                        >
                            <img
                                src={url("cloud")}
                                style={{
                                    display: "block",
                                    width: "20%",
                                    marginLeft: "5%",
                                }}
                            />
                            <img
                                src={url("cloud")}
                                style={{
                                    display: "block",
                                    width: "15%",
                                    marginLeft: "75%",
                                }}
                            />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={2.5}
                            speed={-0.4}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "end",
                                pointerEvents: "none",
                                paddingRight: "260px",
                                zIndex: 2,
                            }}
                        >
                            <img
                                src={url("earth")}
                                style={{ width: "30%", opacity: 0.8 }}
                            />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={3}
                            speed={0.1}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "end",
                                paddingRight: "676px",
                                zIndex: 1,
                            }}
                        >
                            <img
                                src={"/satellite-svgrepo-com.svg"}
                                style={{ width: "10%", opacity: ".6" }}
                            />
                        </ParallaxLayer>
                        <ParallaxLayer
                            offset={3}
                            speed={0.1}
                            style={{
                                display: "flex",
                                alignItems: "start",
                                justifyContent: "start",
                                marginLeft: "64px",
                                zIndex: 1,
                            }}
                        >
                            <img
                                src={"/moon-svgrepo-com.svg"}
                                style={{ width: "10%", opacity: ".8" }}
                            />
                        </ParallaxLayer>

                        <ParallaxLayer
                            onClick={() => handleScroll(0)}
                            offset={3}
                            speed={0}
                            factor={1}
                            style={{
                                backgroundImage: url("stars", true),
                                backgroundSize: "cover",
                                zIndex: 3,
                            }}
                        >
                            <Projects />
                        </ParallaxLayer>
                    </Parallax>
                </div>
            </div>
        </div>
    );
}
