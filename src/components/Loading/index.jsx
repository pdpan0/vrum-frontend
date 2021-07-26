import React from 'react'
import { LoadingWrapper, LoadingIconWrapper, SVGWrapper } from './style'
import loading from './loading.svg';

const Loading = ({ isLoading }) => {
    if (isLoading) {
        return (
            <LoadingWrapper>
                <LoadingIconWrapper>
                    <SVGWrapper src={loading} alt="Carregando" />
                </LoadingIconWrapper>
            </LoadingWrapper>)
    } else {
        return null
    }
}

export default Loading;