import SnowfallBG from "../../components/layouts/SnowfallBG";
import ToggleButton from "../../components/ToggleButton";
import { useDarkMode } from "../../hooks/useDarkMode";
import Skills from "./Skills";
import Me from "./Me";
import AboutMe from "./AboutMe";
import Divider from "../../components/Divider";
import Timeline from "./timeline";

export default function Portfolio() {
    const [isDarkMode, setIsDarkMode] = useDarkMode();

    return (
        <div className="container mx-auto">
            <SnowfallBG snowColor={isDarkMode ? "#ffffff" : "#577BC1"} />
            <div className="p-1 flex justify-end">
                <ToggleButton
                    isDarkMode={isDarkMode}
                    onSetIsDarkMode={setIsDarkMode}
                />
            </div>
            <div className="flex flex-col gap-4">
                <Me />
                <Divider />
                <AboutMe />
                <Divider />
                <Timeline />
                <Divider />
                <Skills />
            </div>
        </div>
    );
}
