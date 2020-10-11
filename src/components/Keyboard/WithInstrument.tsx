import React, { FunctionComponent } from 'react';
import { useSoundfont } from '../../adapters/Soundfont/useSoundfont';
import { useAudioContext } from '../../adapters/useAudioContext';
import { useMount } from '../../utils/useMount';
import { Keyboard } from './Keyboard';

export const KeyboardWithInstrument: FunctionComponent = () => {
	const AudioContext = useAudioContext()!;
	const { loading, play, stop, load } = useSoundfont({ AudioContext });

	useMount(load);

	return <Keyboard loading={loading} play={play} stop={stop} />;
};
