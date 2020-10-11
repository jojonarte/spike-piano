import React, { FunctionComponent } from 'react';
import { useAudioContext } from '../../adapters/useAudioContext';
import { KeyboardWithInstrument } from '../Keyboard/WithInstrument';
import { NoAudioMessage } from '../NoAudioMessage/NoAudioMessage';
import { Playground } from '../Playground/Playground';

export const Main: FunctionComponent = () => {
	const AudioContext = useAudioContext();

	return !!AudioContext ? <Playground /> : <NoAudioMessage />;
};
