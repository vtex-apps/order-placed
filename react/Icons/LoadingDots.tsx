import React, { FC } from 'react'

import { calcIconSize } from './utils'

const iconBase = {
    height: 42,
    width: 42,
}

const LoadingDotsIcon: FC<IconProps> = ({ color = 'orange', size = 42 }) => {
    const newSize = calcIconSize(iconBase, size)

    return (
        <svg
            data-testid="loadingDotsIcon"
            width={newSize.width}
            height={newSize.height}
            viewBox="0 0 60 40"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="15" cy="25" r="5">
                <animate
                    attributeName="cy"
                    values="25;18;25;25;25;25"
                    dur="1.8s"
                    repeatCount="indefinite"
                    begin="0s"
                />
            </circle>
            <circle cx="30" cy="25" r="5">
                <animate
                    attributeName="cy"
                    values="25;25;25;18;25;25"
                    dur="1.8s"
                    repeatCount="indefinite"
                    begin="0s"
                />
            </circle>
            <circle cx="45" cy="25" r="5">
                <animate
                    attributeName="cy"
                    values="25;25;25;25;25;18;25"
                    dur="1.8s"
                    repeatCount="indefinite"
                    begin="0s"
                />
            </circle>
        </svg>
    )
}

export default LoadingDotsIcon
