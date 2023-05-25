import { Box } from "@mui/system";
import { colors } from "../theme";
import { SoundRecord } from "./types";

interface SoundBoxProps {
    data: SoundRecord,
    index: number
}


const SoundBox = ({data, index}: SoundBoxProps) => {

    const boxSize = 400;
    return (
            <Box
                style={{
                    backgroundColor: colors[index%colors.length],
                    borderRadius: boxSize/10,
                    color: '#eee',
                    height: boxSize,
                    padding: 12,
                    width: boxSize,
                    opacity: 0.75
                }} >
                    <div className={"soundbox"}>
                        <h1>{data.speaker}</h1>
                        <p>{data.topic}</p>
                        <audio controls preload="auto">
                            <source src={data.link} type="audio/mpeg"/>
                            Your browser does not support the audio tag.
                        </audio>
                    </div>
            </Box>
    )
}

export default SoundBox;