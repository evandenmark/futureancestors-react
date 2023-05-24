import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SoundBox from './SoundBox';
import { FormRowProps, GridSystemProps } from './types';

const GridSystem = ({data}: GridSystemProps) => {

    const NUM_ROWS = Math.ceil(data.length/3);
    const VERTICAL_SPACE = 5;
    const HORIZONTAL_SPACE = 5;

    console.log("data: ", data)

    const FormRow = ({rowNum} : FormRowProps) => 
        (
            <React.Fragment>
              <Grid item xs={3} marginLeft={HORIZONTAL_SPACE} marginRight={HORIZONTAL_SPACE}>
                <SoundBox data={data[rowNum*3]}/>
              </Grid>
              <Grid item xs={3} marginLeft={HORIZONTAL_SPACE} marginRight={HORIZONTAL_SPACE}>
                {data.length > rowNum*3 + 1 
                    && (<SoundBox data={data[rowNum*3 + 1] }/>)
                }
              </Grid>
              <Grid item xs={3} marginLeft={HORIZONTAL_SPACE} marginRight={HORIZONTAL_SPACE}>
                {data.length > rowNum*3 + 2 
                    && (<SoundBox data={data[rowNum*3 + 2] }/>)
                }
              </Grid>
            </React.Fragment>
          );

    return (
        <Box sx={{ flexGrow: 1 , padding: 20}}>
             <Grid container >
                 {
                     Array.from(Array(NUM_ROWS).keys()).map(
                        i => (
                            <Grid container item marginBottom={VERTICAL_SPACE} marginTop={VERTICAL_SPACE}>
                                <FormRow rowNum={i}/>
                            </Grid>
                        )
                     )
                 }
                
            </Grid>
        </Box>
  );
}

export default GridSystem;