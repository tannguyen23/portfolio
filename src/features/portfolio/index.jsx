import Divider from "../../components/Divider";
import ToggleButton from "../../components/ToggleButton";
import AboutMe from "./AboutMe";
import Me from "./Me";
import Skills from "./Skills";
import Timeline from "./timelline";

export default function Portfolio() {
    return (
        <div className="container mx-64">
            <div className="p-1 flex justify-end">
                <ToggleButton />
            </div>
            <div className="flex flex-col gap-4">
                <Me />
                <Divider />
                <AboutMe />
                <Divider />
                <Timeline />
                <Divider />
                <Skills />
                <Timeline />
            </div>
        </div>
    );
}
