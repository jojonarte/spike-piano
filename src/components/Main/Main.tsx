import React, { FunctionComponent } from 'react';
import { useAudioContext } from '../../adapters/useAudioContext';
import { Keyboard } from '../Keyboard/Keyboard';
import { NoAudioMessage } from '../NoAudioMessage/NoAudioMessage';

export const Main: FunctionComponent = () => {
	const AudioContext = useAudioContext();

	return !!AudioContext ? <Keyboard /> : <NoAudioMessage />;
};
