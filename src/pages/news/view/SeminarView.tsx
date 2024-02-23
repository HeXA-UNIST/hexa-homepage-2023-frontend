import { observer } from "mobx-react";
import { SeminarViewModel } from "@pages/seminar/vm/SeminarViewModel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";

import ContentArea from "@components/ContentArea";

// import Header from "@components/header/Header";
// import Footer from "@components/footer/Footer";

import SubMain from "@components/subMain/SubMain";
import Seminar from "@models/seminar/Seminar";

import { useState } from "react";

function SeminarItem({ seminarData }: { seminarData: Seminar }) {
    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        <button
            onClick={() => setOpen(!isOpen)}
            className="w-full h-30 p-8 bg-neutral-900 rounded-2xl text-zinc-300 mb-10 group/seminarItem"
            type="button"
        >
            <div className="flex flex-col transition-all">
                <div className="w-full flex flex-row items-center">
                    <div className="flex flex-row items-center text-3xl font-bold text-left text-white text-ellipsis overflow-hidden grow">
                        <div className="mb-[3px]">{seminarData.title}</div>

                        {seminarData.attachment.length !== 0 && (
                            <FontAwesomeIcon
                                className=" ml-4 text-xl"
                                icon={faFileLines}
                            />
                        )}
                    </div>
                    <div className="text-xl w-32">{seminarData.writerName}</div>
                    <div className="text-xl w-32">{seminarData.date}</div>
                </div>
                <div
                    className={`flex flex-row text-left overflow-hidden transition-all duration-300 ${
                        seminarData.attachment.length !== 0 ? "ml-10" : "mx-10"
                    } ${isOpen ? "h-80 my-10" : "h-0 my-0"}`}
                >
                    <div>{seminarData.content}</div>
                    <div className="ml-auto">
                        {seminarData.attachment.length !== 0 && (
                            <div>
                                <div className=" text-base mb-3">첨부파일</div>
                                {seminarData.attachment.map((attach) => (
                                    <div
                                        key={attach.url}
                                        className=" p-4 overflow-hidden text-ellipsis w-[20rem] border-zinc-600 bg-zinc-700 rounded-2xl"
                                    >
                                        {attach.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </button>
    );
}

function SeminarView({ viewModel }: { viewModel: SeminarViewModel }) {
    return (
        <div>
            {/* <Header /> */}
            <SubMain
                shownTitle="세미나"
                description="HeXA는, UNIST 학우들을 위해 다양한 서비스를 제공합니다"
            />
            <ContentArea>
                <div className="flex flex-col">
                    {viewModel.seminarsQueryResult.seminars.map((seminar) => (
                        <SeminarItem
                            key={seminar.seminarId}
                            seminarData={seminar}
                        />
                    ))}
                </div>
            </ContentArea>
            {/* <Footer /> */}
        </div>
    );
}

export default observer(SeminarView);
