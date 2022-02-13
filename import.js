const loadScript = (src) => {
	console.log(src);
	const script = document.createElement('script');
	script.src = src;
	script.setAttribute('data-plugins', 'transform-es2015-modules-umd');
	script.type = 'text/babel';
	document.body.append(script);
};

loadScript('./src/services/api.service.js');

// shared component
loadScript('./src/shared/image.component.jsx');
loadScript('./src/shared/footer.component.jsx');
loadScript('./src/shared/sidenav.component.jsx');
loadScript('./src/shared/cover.component.jsx');
loadScript('./src/shared/container.component.jsx');
loadScript('./src/shared/pagination.component.jsx');

// pages
loadScript('./src/pages/home.jsx');
loadScript('./src/pages/contact.page.jsx');
loadScript('./src/pages/discover.page.jsx');
loadScript('./src/pages/events.page.jsx');
loadScript('./src/pages/find-spot.page.jsx');
loadScript('./src/pages/news.page.jsx');
loadScript('./src/pages/videos.page.jsx');
loadScript('./src/pages/admin.page.jsx');
loadScript('./src/routes.js');

// services
loadScript('./src/services/auth.service.js');

// la base
loadScript('./src/shared/auth.component.jsx');
loadScript('./src/index.jsx');