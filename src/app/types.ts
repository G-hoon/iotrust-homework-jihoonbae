/** biome-ignore-all lint/suspicious/noExplicitAny: 모달 상태 관리 */
import type { ComponentType } from 'react';

export interface ModalInstance {
	id: string;
	component: ComponentType<any>;
	props: any;
	closeOnDimmedClick?: boolean;
}
