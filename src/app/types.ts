/** biome-ignore-all lint/suspicious/noExplicitAny: <explanation> */
import type { ComponentType } from 'react';

export interface ModalInstance {
	id: string;
	component: ComponentType<any>;
	props: any;
	closeOnDimmedClick?: boolean;
}
