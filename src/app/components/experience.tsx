import Text from "./text";

export default function ExperienceContent() {
    return (
        <div className="flex flex-col w-full">
            {/* Main Content */}
            <div className="w-full flex flex-row justify-between items-start gap-20 bg-white/30 p-2">
                {/* Experience */}
                <div className="w-3/8 flex flex-col">
                    <div>
                        <Text size="medium" style={{ textAlign: "justify" }}>
                            <b>Experience</b>
                        </Text>
                    </div>
                    <div className="flex flex-col pl-4 space-y-5 mt-5">
                        <Text size="small" style={{ textAlign: "justify" }}>
                            <b>-DevOps I (2025 - Present)</b> <br />
                            &nbsp;&nbsp;Intact
                        </Text>
                        <Text size="small" style={{ textAlign: "justify" }}>
                            <b>-DevOps Intern (2024)</b> <br />
                            &nbsp;&nbsp;Intact
                        </Text>
                        <Text size="small" style={{ textAlign: "justify" }}>
                            <b>-Cybersecurity and IT Intern (2022)</b> <br />
                            &nbsp;&nbsp;Hydro-Québec
                        </Text>
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
                        <Text size="small" style={{ textAlign: "justify" }}>
                            <b>-Sportganize (2025)</b> <br />
                            &nbsp;&nbsp;Website and mobile app for Accès Badminton that manages sports clubs
                            through player registration, event scheduling, and real-time communication.
                        </Text>
                        <Text size="small" style={{ textAlign: "justify" }}>
                            <b>-BathroomBreak (2024)</b> <br />
                            &nbsp;&nbsp;CodeJam Hackathon submission. Your go-to map for gender-neutral,
                            accessible, and well-stocked bathrooms at McGill.
                        </Text>
                        <Text size="small" style={{ textAlign: "justify" }}>
                            <b>-Multilingual Subtitle Generator (2024)</b> <br />
                            &nbsp;&nbsp;Fine-tuned the Whisper-small model on the Common Voice French dataset
                            to transcribe and translate foreign-language audio into timestamped English
                            subtitles.
                        </Text>
                    </div>
                </div>
            </div>

            <div className="text-left mt-2">
                <Text size="small" style={{ textAlign: "center" }}>
                    More details can be found on my <b>resume</b> and <b>GitHub</b>..!
                </Text>
            </div>
        </div>
    );
}
