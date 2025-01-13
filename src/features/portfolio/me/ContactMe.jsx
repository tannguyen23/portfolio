import clsx from "clsx";
import Button from "../../../components/Button";

export default function ContactMe({className}) {
    return (
        <div className={clsx("flex flex-row justify-between",className)}>
            <Button className="">Contact Me</Button>
            <div className="flex flex-row gap-4 items-center justify-center">
                <Button className="!rounded-full icon-[ic--baseline-facebook] w-12 h-12" />
                <Button className="!rounded-full icon-[mdi--github] w-12 h-12 bg-[#D1D5DB]" />
                <Button className="!rounded-full icon-[mdi--linkedin] w-12 h-12 bg-[#0882bd]" />
            </div>
        </div>
    );
}
