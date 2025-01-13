import SnowfallBG from "../../components/layouts/SnowfallBG";
import ToggleButton from "../../components/layouts/ToggleButton";
import { useDarkMode } from "../../hooks/useDarkMode";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Divider from "../../components/Divider";
import Timeline from "./timeline";
import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import MeContainer from "./me";

export default function Portfolio() {
    const parallax = useRef(null);

    const [isDarkMode, setIsDarkMode] = useDarkMode();

    const url = (name, wrap = false) =>
        `${
            wrap ? "url(" : ""
        }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
            wrap ? ")" : ""
        }`;

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
                    <Parallax ref={parallax} pages={3}>
                        <ParallaxLayer
                            offset={1}
                            speed={1}
                            style={{ backgroundColor: "#805E73" }}
                        />
                        <ParallaxLayer
                            offset={2}
                            speed={1}
                            style={{ backgroundColor: "#87BCDE" }}
                        />

                        <ParallaxLayer
                            offset={0}
                            speed={0}
                            factor={3}
                            style={{
                                backgroundImage: url("stars", true),
                                backgroundSize: "cover",
                            }}
                            sticky={true}
                        >
                          <MeContainer/>
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={1.3}
                            speed={-0.3}
                            style={{ pointerEvents: "none" }}
                        >
                            <img
                                src={url("satellite4")}
                                style={{ width: "15%", marginLeft: "70%" }}
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
                            offset={1.6}
                            speed={-0.1}
                            style={{ opacity: 0.4 }}
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
                            style={{ opacity: 0.6 }}
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
                                justifyContent: "center",
                                pointerEvents: "none",
                            }}
                        >
                            <img src={url("earth")} style={{ width: "60%" }} />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={2}
                            speed={-0.3}
                            style={{
                                backgroundSize: "80%",
                                backgroundPosition: "center",
                                backgroundImage: url("clients", true),
                            }}
                        />

                        <ParallaxLayer
                            offset={0}
                            speed={0.1}
                            onClick={() => parallax.current.scrollTo(1)}
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
                            offset={1}
                            speed={0.1}
                            onClick={() => parallax.current.scrollTo(2)}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <img src={url("bash")} style={{ width: "40%" }} />
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={2}
                            speed={-0}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onClick={() => parallax.current.scrollTo(0)}
                        >
                            <img
                                src={url("clients-main")}
                                style={{ width: "40%" }}
                            />
                        </ParallaxLayer>
                    </Parallax>
                </div>

                {/* <Me />
                <Divider />
                <AboutMe />
                <Divider />
                <Timeline />
                <Divider />
                <Skills /> */}
            </div>
        </div>
    );
}
