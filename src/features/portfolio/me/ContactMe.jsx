import clsx from "clsx";
import Button from "../../../components/Button";
import { useState } from "react";
import Modal from "../../../components/Modal";
import Form from "./form";

export default function ContactMe({ className }) {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => setOpenModal(true);

    const handleCloseModal = () => setOpenModal(false);

    return (
        <div className={clsx("flex flex-row justify-between", className)}>
            <Button onClick={() => handleOpenModal()}>Contact Me</Button>
            <div className="flex flex-row gap-4 items-center justify-center">
                <Button className="!rounded-full icon-[ic--baseline-facebook] w-12 h-12" />
                <Button className="!rounded-full icon-[mdi--github] w-12 h-12 bg-[#D1D5DB]" />
                <Button className="!rounded-full icon-[mdi--linkedin] w-12 h-12 bg-[#0882bd]" />
            </div>
            <Modal isOpen={openModal} onClose={handleCloseModal}>
                <Form />
            </Modal>
        </div>
    );
}
