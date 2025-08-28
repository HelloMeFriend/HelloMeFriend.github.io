import Text from "./text";

export default function ExperienceContent() {
    return (
        //style={{ outline: "4px solid black", outlineOffset: "1px", borderRadius: "1px 1px 1px 1px", padding: "10px" }}
        <div className="w-full flex flex-row justify-between items-start gap-20 bg-white/30 p-2">
            <div className="w-3/8 flex flex-col">
                <div>
                    <Text size="medium" style={{ textAlign: 'justify' }}>
                        <b>Experience</b>
                    </Text>
                </div>
                <div className="flex flex-col pl-4 space-y-5 mt-5">
                    <Text size="small" style={{ textAlign: 'justify' }}>
                        -DevOps I  (2025 - Present) <br />
                        &nbsp;&nbsp;Intact
                    </Text>
                    <Text size="small" style={{ textAlign: 'justify' }}>
                        -DevOps Intern (2024)<br />
                        &nbsp;&nbsp;Intact
                    </Text>
                    <Text size="small" style={{ textAlign: 'justify' }}>
                        -Cybersecurity and IT Intern (2022)<br />
                        &nbsp;&nbsp;Hydro-Québec
                    </Text>
                </div>
            </div>
            <div className="w-5/8 flex flex-col">
                <div>
                    <Text size="medium" style={{ textAlign: 'justify' }}>
                        <b>Projects</b>
                    </Text>
                </div>
                <div className="flex flex-col pl-4 space-y-5 mt-5">
                    <Text size="small" style={{ textAlign: 'justify' }}>
                        -Sportganize (2025)<br />
                        &nbsp;&nbsp;
                        Website and mobile app for Accès Badminton that manages sports clubs through player registration, and event scheduling,
                        real-time communication.
                    </Text>
                    <Text size="small" style={{ textAlign: 'justify' }}>
                        -BathroomBreak (2024)<br />
                        &nbsp;&nbsp;CodeJam Hackathon submission. Your go-to map for gender-neutral, accessible, and well-stocked bathrooms at McGill.

                    </Text>
                    <Text size="small" style={{ textAlign: 'justify' }}>
                        -Multilingual Subtitle Generator (2024) <br />
                        &nbsp;&nbsp;Fine-tuned the Whisper-small model on the Common Voice French dataset to transcribe and translate foreign-language
                        audio into timestamped English subtitles.
                    </Text>
                </div>
            </div>
        </div>
    );
}