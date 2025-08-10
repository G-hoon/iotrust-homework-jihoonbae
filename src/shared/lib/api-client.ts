import axios from 'axios';

// API 기본 URL 설정 (환경변수에서 가져오기)
const API_BASE_URL =
	import.meta.env.VITE_API_URL || 'http://localhost:5173/api';

// Axios 인스턴스 생성
export const apiClient = axios.create({
	baseURL: API_BASE_URL,
	timeout: 10000, // 10초 타임아웃
	headers: {
		'Content-Type': 'application/json',
	},
});

// 요청 인터셉터 (필요시 인증 토큰 등 추가)
apiClient.interceptors.request.use(
	(config) => {
		// 개발 환경에서 API 호출 로그
		if (import.meta.env.DEV) {
			console.log(
				`🌐 API Request: ${config.method?.toUpperCase()} ${config.url}`,
				{
					baseURL: config.baseURL,
					params: config.params,
					data: config.data,
				},
			);
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

// 응답 인터셉터 (에러 처리 등)
apiClient.interceptors.response.use(
	(response) => {
		// 개발 환경에서 API 응답 로그
		if (import.meta.env.DEV) {
			console.log(
				`✅ API Response: ${response.config.method?.toUpperCase()} ${response.config.url}`,
				{
					status: response.status,
					data: response.data,
				},
			);
		}
		return response;
	},
	(error) => {
		// 에러 로깅
		if (import.meta.env.DEV) {
			console.error(
				`❌ API Error: ${error.config?.method?.toUpperCase()} ${error.config?.url}`,
				{
					status: error.response?.status,
					message: error.message,
					data: error.response?.data,
				},
			);
		}

		// 에러 타입별 처리
		if (error.response?.status === 401) {
			// 인증 에러 처리
			console.warn('Authentication failed');
		} else if (error.response?.status >= 500) {
			// 서버 에러 처리
			console.error('Server error occurred');
		}

		return Promise.reject(error);
	},
);

// API 엔드포인트 URL 생성 헬퍼
export const createApiUrl = (endpoint: string): string => {
	return `${API_BASE_URL}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;
};

// Mock API를 실제 API처럼 보이게 하는 헬퍼
export const mockApiCall = async <T>(
	endpoint: string,
	method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
	mockData: T,
	delay: number = 500,
): Promise<T> => {
	// 실제 API URL 생성 (로깅 목적)
	const url = createApiUrl(endpoint);

	// 개발 환경에서 Mock API 호출 로그
	if (import.meta.env.DEV) {
		console.log(`🔄 Mock API Call: ${method} ${url}`);
	}

	// 지연 시뮬레이션
	await new Promise((resolve) => setTimeout(resolve, delay));

	// Mock 응답 로그
	if (import.meta.env.DEV) {
		console.log(`✨ Mock API Response: ${method} ${url}`, mockData);
	}

	return mockData;
};
