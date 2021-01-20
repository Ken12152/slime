import React from 'react'
import SlimeAnimation from '../../components/slime/slimeAnimation'

import slimeAnimationPath from '../slimeSvgData/slime_1'

export default props => (
    <SlimeAnimation containerId="work-slime-container"
        width={props.width} height={props.height} style={props.style}

        slimeId="work-slime" 
        dur="3s" values={slimeAnimationPath} viewBox="0 0 634.33 703.22" 
    ></SlimeAnimation>
)