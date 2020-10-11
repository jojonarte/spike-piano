import { useRef } from 'react';
import { accessContext } from '../domain/audio';
import { Optional } from '../domain/types';

export function useAudioContext(): Optional<AudioContextType> {
	const audioCtx = useRef(accessContext());

	return audioCtx.current;
}
