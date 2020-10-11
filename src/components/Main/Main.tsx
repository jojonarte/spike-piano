import React, { FunctionComponent } from 'react';
import { useAudioContext } from '../../adapters/useAudioContext';
import { KeyboardWithInstrument } from '../Keyboard/WithInstrument';
import { NoAudioMessage } from '../NoAudioMessage/NoAudioMessage';

export const Main: FunctionComponent = () => {
	const AudioContext = useAudioContext();

	return !!AudioContext ? <KeyboardWithInstrument /> : <NoAudioMessage />;
};
