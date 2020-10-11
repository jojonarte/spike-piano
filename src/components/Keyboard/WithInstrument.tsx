import React, { FunctionComponent, useEffect } from 'react';
import { SoundfontProvider } from '../../adapters/Soundfont/SoundfontProvider';
import { useSoundfont } from '../../adapters/Soundfont/useSoundfont';
import { useAudioContext } from '../../adapters/useAudioContext';
import { useInstrument } from '../../state/Instrument/Context';
import { Keyboard } from './Keyboard';

export const KeyboardWithInstrument: FunctionComponent = () => {
	const AudioContext = useAudioContext()!;
	const { instrument } = useInstrument();

	return (
		<SoundfontProvider
			AudioContext={AudioContext}
			instrument={instrument}
			render={(props) => <Keyboard {...props} />}
		/>
	);
};
