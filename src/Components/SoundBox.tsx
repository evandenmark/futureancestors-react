import { Box } from "@mui/system";
import { SoundRecord } from "./types";

interface SoundBoxProps {
    data: SoundRecord
}


const SoundBox = ({data}: SoundBoxProps) => {

    const boxSize = 400;

    return (
        <Box
            style={{
                backgroundColor: '#333',
                borderRadius: 4,
                color: '#eee',
                height: boxSize,
                padding: 12,
                width: boxSize,
            }} >
                <div className={"soundbox"}>
                    <h2>{data.speaker}</h2>
                    <p>{data.topic}</p>
                    <audio controls>
                        <source src={data.link} type="audio/mpeg"/>
                        Your browser does not support the audio tag.
                    </audio>
                </div>
          </Box>
    )
}

export default SoundBox;