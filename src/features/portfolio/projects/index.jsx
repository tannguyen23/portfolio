import GlowingText from "../../../components/GlowingText";
import Item from "./Item";

export default function Projects() {
    return (
        <div className="flex flex-col h-full justify-start items-end md:mx-48">
            <GlowingText
                text="Joined projects"
                gradientColors="from-[#857eff] via-[#a69bff] to-[#c3baff]"
            />
            <div className="flex flex-row w-full">
              <Item/>
            </div>

        </div>
    );
}
