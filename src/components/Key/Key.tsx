import React, { FunctionComponent } from 'react';
import { NoteType } from '../../domain/note';
import clsx from 'clsx';

interface KeyProps {
	type: NoteType;
	label: string;
	disabled?: boolean;
}

export const Key: FunctionComponent<KeyProps> = (props) => {
	const { type, label, ...rest } = props;
	return (
		<button className={clsx(`key key--${type}`)} type="button" {...rest}>
			{label}
		</button>
	);
};
