import React, { FunctionComponent, useEffect } from 'react';
import { useSoundfont } from '../../adapters/Soundfont/useSoundfont';
import { useAudioContext } from '../../adapters/useAudioContext';
import { useInstrument } from '../../state/Instrument/Context';
import { useMount } from '../../utils/useMount';
import { Keyboard } from './Keyboard';

export const KeyboardWithInstrument: FunctionComponent = () => {
	const AudioContext = useAudioContext()!;
	const { instrument } = useInstrument();
	const { loading, play, stop, load, current } = useSoundfont({ AudioContext });

	useEffect(() => {
		if (!loading && instrument !== current) load(instrument);
	}, [load, loading, current, instrument]);

	return <Keyboard loading={loading} play={play} stop={stop} />;
};
