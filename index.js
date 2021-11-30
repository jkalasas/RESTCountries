import { createApp } from 'https://unpkg.com/petite-vue?module';

function mainApp(props) {
	return {
		isDarkMode: false,
	};
}

createApp({
	mainApp,
}).mount('#app');
