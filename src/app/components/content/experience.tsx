import Text from "../text";

export default function ExperienceContent() {
    return (
        <div className="flex flex-col w-full">
            {/* Main Content */}
            <div className="w-full flex flex-row justify-between items-start bg-white/30 m-2 p-2">

                {/* Experience */}
                <div className="w-3/8 flex flex-col">
                    <div>
                        <Text size="medium" style={{ textAlign: "justify" }}>
                            <b>Experience</b>
                        </Text>
                    </div>
                    <div className="flex flex-col pl-4 space-y-5 mt-5">
                        <div>
                            <Text size="ms">
                                <b>-Software Engineer (2025-Present)</b>< br />
                            </Text>
                            <Text size="small" style={{ textAlign: "justify", color: "black" }}>
                                &nbsp;&nbsp;Intact Financial Corporation
                            </Text>
                        </div>
                        <div>
                            <Text size="ms">
                                <b>-DevOps Intern (2024)</b>< br />
                            </Text>
                            <Text size="small" style={{ textAlign: "justify", color: "black" }}>
                                &nbsp;&nbsp;Intact Financial Corporation
                            </Text>
                        </div>
                        <div>
                            <Text size="ms">
                                <b>-Software Developer Intern (2022)</b>< br />
                            </Text>
                            <Text size="small" style={{ textAlign: "justify", color: "black" }}>
                                &nbsp;&nbsp;Hydro-Québec
                            </Text>
                        </div>
                    </div>
                </div>

                {/* Projects */}
                <div className="w-5/8 flex flex-col">
                    <div>
                        <Text size="medium" style={{ textAlign: "justify" }}>
                            <b>Projects</b>
                        </Text>
                    </div>
                    <div className="flex flex-col pl-4 space-y-5 mt-5">
                        <div>
                            <Text size="ms">
                                <b>-Sportganize (2025)</b>< br />
                            </Text>
                            <Text size="small" style={{ textAlign: "justify", color: "black" }}>
                                &nbsp;&nbsp;Website for Accès Badminton that manages sports clubs
                                through player registration, event scheduling, and real-time communication.
                            </Text>
                        </div>
                        <div>
                            <Text size="ms">
                                <b>-BathroomBreak (2024)</b>< br />
                            </Text>
                            <Text size="small" style={{ textAlign: "justify", color: "black" }}>
                                &nbsp;&nbsp;CodeJam Hackathon submission. Your go-to map for gender-neutral,
                                accessible, and well-stocked bathrooms at McGill.
                            </Text>
                        </div>
                        <div>
                            <Text size="ms">
                                <b>-Multilingual Subtitle Generator (2024)</b> < br />
                            </Text>
                            <Text size="small" style={{ textAlign: "justify", color: "black" }}>
                                &nbsp;&nbsp;Fine-tuned the Whisper-small model
                                to transcribe and translate foreign-language audio into timestamped English
                                subtitles.
                            </Text>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="text-left mb-4">
                <Text size="small" style={{ textAlign: "center" }}>
                    More details can be found on my{' '}
                    <a
                        href="/1753900046.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        <b>resume</b>
                    </a>{' '}
                    and{' '}
                    <a
                        href="https://github.com/hellomefriend"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        <b>GitHub</b>
                    </a>
                    ..!
                </Text>
            </div>


        </div>
    );
}
