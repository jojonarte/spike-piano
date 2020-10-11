import React, { FunctionComponent, ReactElement, useEffect } from 'react';
import { InstrumentName } from 'soundfont-player';
import { MidiValue } from '../../domain/note';
import { useSoundfont } from './useSoundfont';
interface ProviderProps {
	instrument?: InstrumentName;
	AudioContext: AudioContextType;
	render(props: ProvidedProps): ReactElement;
}

interface ProvidedProps {
	loading: boolean;
	play(note: MidiValue): Promise<void>;
	stop(note: MidiValue): Promise<void>;
}

export const SoundfontProvider: FunctionComponent<ProviderProps> = ({
	AudioContext,
	instrument,
	render,
}) => {
	const { loading, play, stop, load, current } = useSoundfont({ AudioContext });
	useEffect(() => {
		if (!loading && instrument !== current) load(instrument);
	}, [load, loading, instrument, current]);

	return render({ loading, play, stop });
};
