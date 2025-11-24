export const languages = {
	en: 'English',
	es: 'Español',
} as const;

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

type UiDictionary = {
	siteTitle: string;
	siteDescription: string;
	heroName: string;
	heroRole: string;
	heroBio: string;
	latestPosts: string;
	viewAll: string;
	emptyLatest: string;
	blogPageTitle: string;
	blogPageDescription: string;
	emptyBlog: string;
	updatedLabel: string;
	byLabel: string;
	connectWithMe: string;
	readMore: string;
};

export const ui: Record<Lang, UiDictionary> = {
	en: {
		siteTitle: 'Gerardo Báez - Full Stack Web Developer',
		siteDescription:
			'Full Stack Web Developer freelancer & software engineer based in Puerto Rico',
		heroName: 'Gerardo Báez',
		heroRole: 'Full Stack Web Developer',
		heroBio:
			"I'm a full stack web developer freelancer & software engineer based in Puerto Rico. I help businesses build modern web applications and digital solutions. When I'm not coding, I share my thoughts and experiences on development, freelancing, and technology.",
		latestPosts: 'Latest Posts',
		viewAll: 'View all →',
		emptyLatest: 'Blog posts coming soon...',
		blogPageTitle: 'Blog',
		blogPageDescription: 'Thoughts and ideas on web development, freelancing, and technology',
		emptyBlog: 'No blog posts yet. Check back soon!',
		updatedLabel: 'Updated',
		byLabel: 'By',
		connectWithMe: 'Connect with me:',
		readMore: 'Read more',
	},
	es: {
		siteTitle: 'Gerardo Báez - Desarrollador Web Full Stack',
		siteDescription:
			'Desarrollador web full stack y consultor de software con base en Puerto Rico',
		heroName: 'Gerardo Báez',
		heroRole: 'Desarrollador Web Full Stack',
		heroBio:
			'Soy un desarrollador web full stack y consultor de software radicado en Puerto Rico. Ayudo a empresas a crear aplicaciones modernas y soluciones digitales. Cuando no estoy programando, comparto mis ideas y experiencias sobre desarrollo, consultoría y tecnología.',
		latestPosts: 'Publicaciones recientes',
		viewAll: 'Ver todas →',
		emptyLatest: 'Pronto publicaré nuevos artículos...',
		blogPageTitle: 'Blog',
		blogPageDescription: 'Ideas y experiencias sobre desarrollo web, consultoría y tecnología',
		emptyBlog: 'Todavía no hay publicaciones. ¡Vuelve pronto!',
		updatedLabel: 'Actualizado',
		byLabel: 'Por',
		connectWithMe: 'Conecta conmigo:',
		readMore: 'Leer más',
	},
};

export function getDictionary(lang: string | undefined) {
	if (!lang || !(lang in ui)) {
		return ui[defaultLang];
	}
	return ui[lang as Lang];
}


