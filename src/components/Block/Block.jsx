import React from 'react'

import { BlockContainerWrapper, BlockWrapper } from './style'

export const Block = ({counter, name, href}) => (
    <BlockWrapper to={href}>
        {counter}<br/>
        {name}
    </BlockWrapper>
)

export const BlockContainer = ({childreen}) => (
    <BlockContainerWrapper>
        {childreen}
    </BlockContainerWrapper>
)